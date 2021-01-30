

//save  tweet 
exports.tweet = async (req, res) => {

    const tweet = new Tweet({
        userid: req.body.userid,
        caption: req.body.caption,
        img: req.body.img,
        likes: 0,
        saved: 0,
        retweets: 0,
    })
    await tweet.save()

    const user = await User.findOne({ _id: req.body.userid })
    console.log(user)
    user.tweets.push(tweet)
    User.updateOne({ _id: req.body.userid }, { tweets: user.tweets }, (err, user) => {
        if (err) return res.status(400).send(err);

        return res.status(200).json(user);

    })

}

//retrive tweets 
exports.tweets = async (req, res) => {
    const tweets = await Tweet.find().populate('userid').populate("comments")
    return res.status(200).json(tweets);
}



