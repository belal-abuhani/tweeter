
const Tweet = require('../model/tweet');
const User = require('../model/user');

exports.tweet = async (req, res) => {

    const tweet = new Tweet({
        userId: req.body.userId,
        caption: req.body.caption,
        image: req.body.image,
        likes: 0,
        saved: 0,
        retweets: 0,
    })
    await tweet.save()

    const user = await User.findOne({ _id: req.body.userId })
    console.log(user)
    user.tweets.push(tweet)
    User.updateOne({ _id: req.body.userId }, { tweets: user.tweets }, (err, user) => {
        if (err) return res.status(400).send(err);

        return res.status(200).json(user);

    })

}

//retrive tweets 
exports.tweets = async (req, res) => {
    const tweets = await Tweet.find().populate('userId').populate("comments")
    return res.status(200).json(tweets);
}


exports.mytweets = async (req, res) => {
    const user = await User.find({ _id: req.params.userId }).populate('tweets')
    // var myTweets = user[0]
    // console.log(user[0].tweets)

    return res.status(200).json(user[0].tweets);
}