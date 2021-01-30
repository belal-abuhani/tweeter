const mongoose = require('mongoose')


const comment = mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    img: {
        type: String
    }
}, { timestamps: true })


const Comment = mongoose.model('Comment', comment);


module.exports = Comment