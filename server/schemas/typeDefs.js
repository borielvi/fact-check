const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        firstName: String
        lastName: String
        email: String
        friends: [User]
        claims: [Claim]
    }

    type Claim {
        _id: ID
        text: String
        author: String
        date: String
        reviews: [Review]
    }

    type Review {
        _id: ID
        author: String
        title: String
        date: String
        rating: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        claims: [Claim]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addClaim(text: String!, author: String!): Claim
        addReview(author: String!, title: String!, rating: String!, claimId: ID!): Review
        addFriend(friendId: ID!): User
    }
`

module.exports = typeDefs;