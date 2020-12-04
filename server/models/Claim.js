const { Schema, model } = require('mongoose');
const moment = require('moment');

const claimSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ]
    }
);

const Claim = model('Claim', claimSchema);

module.exports = Claim;
