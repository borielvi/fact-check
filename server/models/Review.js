const { Schema, model } = require('mongoose');
const moment = require('moment');

const reviewSchema = new Schema(
    {
        author: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        },
        rating: {
            type: String,
            required: true
        }
    }
);

const Review = model('Review', reviewSchema);

module.exports = Review;
