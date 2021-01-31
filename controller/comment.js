const Comment = require('../model/Comment')
// const Tweet = require('../model/Tweet')
// const User = require('../model/User');



//saving the tweet in db
exports.comment = async (req, res) => {
    console.log(req.body)
    const newComment = new Comment({
        userId: req.body.userId,
        tweet: req.body.tweetid,
        comment: req.body.comment,
        img: req.body.img,
        likes: 0
    })
    await newComment.save()
    const tweet = await Tweet.findOne({ _id: req.body.tweetid })
    tweet.comments.push(newComment)
    Tweet.updateOne({ _id: req.body.tweetid }, { comments: tweet.comments }, (err, tweet) => {
        if (err) {
            return res.status(400).send(err);
        }
        if (tweet) {
            return res.status(200).send(tweet);
        }
    })
}



exports.likeOnComment = async (req, res) => {
    console.log(req.body)
    await Comment.findOne({ _id: req.body.commentid }, (err, comment) => {
        if (err)
            return res.status(400).send(err);
        if (comment) {
            // comment.likes += 1
            Comment.updateOne({ _id: req.body.commentid }, { likes: comment.likes + 1 }, (err, data) => {
                if (err)
                    return res.status(400).send(err);
                if (data) {
                    return res.status(200).send('like done')
                }
            })
        }
    })
}

exports.commentUnLike = async (req, res) => {
    console.log(req.body)
    await Comment.findOne({ _id: req.body.commentid }, (err, comment) => {
        if (err)
            return res.status(400).send(err);
        if (comment) {
            // comment.likes = comment.likes - 1
            Comment.updateOne({ _id: req.body.commentid }, { likes: comment.likes - 1 }, (err, data) => {
                if (err)
                    return res.status(400).send(err);
                if (data) {
                    return res.status(200).send('unlike done')
                }
            })
        }
    })
}
