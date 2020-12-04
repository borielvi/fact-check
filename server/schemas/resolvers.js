const { User, Claim, Review } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('claims')
                .populate('friends');

                return userData;
            }

            throw new AuthenticationError('Not logged in!');
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('claims')
            .populate('reviews');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('claims');
        },
        claims: async () => {
            return Claim.find()
            .populate('reviews');
        }
        /*
        claims_title: async (parent, {}) => {

        },
        claims_text: async (parent, {}) => {

        },
        claims_author: async (parent, {}) => {

        },
        claims_date: async (parent, {}) => {

        },
        reviews_author: async (parent, {}) => {

        },
        reviews_title: async (parent, {}) => {

        },
        reviews_date: async (parent, {}) => {

        }
        */
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addClaim: async (parent, args, context) => {
            if (context.user) {
                const claim = await Claim.create({ ...args, author: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { claims: claim._id } },
                    { new: true }
                );

                return claim;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addReview: async (parent, args, context) => {
            console.log(args);
            if (context.user) {
                const review = await Review.create({ ...args, author: context.user.username });

                await Claim.findByIdAndUpdate(
                    { _id: args.claimId },
                    { $push: { reviews: review._id } },
                    { new: true }
                );

                return review;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }
            
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;