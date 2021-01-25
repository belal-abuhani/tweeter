const mongoose = require("mongoose");
const User = require("./user")

const tweet = mongoose.Schema({

    content: {
        required: true,
        type: String
    },

    images: {
        type: Array
    },

    user: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    isPublic: {
        type: Boolean
    },

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    },

    retweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],

    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],


    retweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweet)
module.exports = Tweet