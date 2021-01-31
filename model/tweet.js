const mongoose = require("mongoose");


const tweet = mongoose.Schema({

    caption: {
        required: true,
        type: String
    },

    image: {
        type: Array
    },

    userId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    isPublic: {
        type: Boolean
    },

    // likes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }],

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],

    likes: {
        type: Number
    },
    saved: {
        type: Number
    },
    retweets: {
        type: Number
    },


    // retweets: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Tweet'
    // }],

    // replies: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Tweet'
    // }],


    // retweet: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Tweet'
    // }
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweet)
module.exports = Tweet