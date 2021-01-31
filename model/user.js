const mongoose = require('mongoose');

const user = mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    bio: {
        type: String
    },

    profileImg: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
    },
    coverImg: {
        type: String
    },

    tweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],

    retweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],

    savedTeets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

})


const User = mongoose.model('User', user);

module.exports = User;