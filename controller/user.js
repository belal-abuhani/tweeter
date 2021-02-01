const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const User = require('../model/user');
const Tweet = require('../model/tweet');

// const auth = require("./auth")


//this schema to validate data from the client before saved it in database  
const userValidat = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
    // phoneNumber: joi.string().min(6).required(),
});

// const loginSchema = joi.object({
//     email: joi.string().min(6).required().email(),
//     password: joi.string().min(6).required(),

// });


//this signup method for post requeset from client to save data in database 
exports.signup = async (req, res) => {
    // this validate methode to check the requirement data
    console.log(req.body)
    const { error } = await userValidat.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //findOne to check if email exit or not in database
    const isEmailExsist = await User.findOne({ email: req.body.email })
    if (isEmailExsist) return res.status(400).send("email already exist")
    // to hashPassword to be more secure
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    //make make new document(client) in mongoDB 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        // phoneNumber: req.body.phoneNumber
    });
    console.log(user)
    try {
        //save document(client) in mongoDB
        const savedUser = await user.save();
        const token = await jwt.sign({ _id: user._id }, "sadsadasd");
        // res.header("login", token)
        res.json({ token, userId: savedUser._id })
        console.log("asdasdsadsad")

    }
    catch (err) {
        console.log(err)
        res.status(400).send(err);

    }


}




exports.signin = async (req, res) => {
    // console.log('req', req.body)


    const user = await User.findOne({ email: req.body.email })
    console.log(user);
    if (!user) return res.status(400).send("email dose not exist");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("password is wrong");

    const token = jwt.sign({ _id: user._id }, "sadsadasd");
    // res.header("login", token)
    res.json({ token, userId: user._id })
    console.log(token);

}

// exports.userlogout = (req, res) => {
//     res.cookie('login', '')
//     res.status(200).send(req.client);
// }




exports.follow = async (req, res) => {

    //update user followers 
    await User.findOne({ _id: req.body.userid }, (err, user) => {
        if (err) return res.status(400).send(err);

        user.followers.push(req.body.myId)
        User.updateOne({ _id: req.body.userid }, { followers: user.followers }, (err, updated) => {
            if (err)
                return res.status(400).send(err);
            if (updated) {
                User.findOne({ _id: req.body.myId }, (err, myId) => {
                    if (err)
                        return res.status(400).send(err);
                    if (myId) {
                        myId.following.push(req.body.userid)

                        //update myId following  
                        User.updateOne({ _id: req.body.myId }, { following: myId.following }, (err, data) => {
                            if (err) return res.status(400).send(err);

                            return res.status(200).send('followed')

                        })
                    }
                })
            }
        })

    })
}




exports.unfollow = async (req, res) => {

    await User.findOne({ _id: req.body.userid }, (err, user) => {
        if (err)
            return res.status(400).send(err);

        let followers = user.followers.filter((element, i) => {
            return element.toString() !== req.body.myId
        })

        //update the user follwers in the database 
        User.updateOne({ _id: req.body.userid }, { followers: followers }, (err) => {

            if (err) return res.status(400).send(err);
            User.findOne({ _id: req.body.myId }, (err, myUser) => {
                if (err)
                    return res.status(400).send(err);

                let following = myUser.following.filter((element, i) => {
                    return element.toString() !== req.body.userid
                })

                //update the myUser follwing in the database 
                User.updateOne({ _id: req.body.myId }, { following: following }, (err, data) => {
                    if (err)
                        return res.status(400).send(err);

                    return res.status(200).send('unfollow done')

                })

            })
        })

    })
}



exports.addBookmark = async (req, res) => {

    await User.findOne({ _id: req.body.userId }, (err, user) => {

        if (err) return res.status(400).send(err);

        user.savedTeets.push(req.body.tweetId)
        User.updateOne({ _id: req.body.userId }, { savedTeets: user.savedTeets }, (err) => {
            if (err) return res.status(400).send(err);

            Tweet.findOne({ _id: req.body.tweetId }, (err, tweet) => {
                if (err) return res.status(400).send(err);
                Tweet.updateOne({ _id: req.body.tweetId }, { saved: tweet.saved + 1 }, function (err) {

                    if (err)
                        return res.status(400).send(err);

                    return res.status(200).send('add tweet done');

                })

            })

        })
    })

}


//delete 
exports.deleteBookmark = async (req, res) => {
    await User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) return res.status(400).send(err);

        let savedTeets = user.savedTeets.filter((element) => {
            return element.toString() !== req.body.tweetId
        })
        User.updateOne({ _id: req.body.userId }, { savedTeets: savedTeets }, (err, updated) => {
            if (err)
                return res.status(400).send(err);
            Tweet.findOne({ _id: req.body.tweetId }, (err, tweet) => {
                if (err) return res.status(400).send(err);

                tweet.saved = tweet.saved - 1
                Tweet.updateOne({ _id: req.body.tweetId }, { saved: tweet.saved }, (err, data) => {
                    if (err) return res.status(400).send(err);

                    return res.status(200).send('deleted from bookmark')

                })

            })

        })

    })
}



exports.retweet = async (req, res) => {
    await User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) return res.status(400).send(err);

        user.retweets.push(req.body.tweetId)

        User.updateOne({ _id: req.body.userId }, { retweets: user.retweets }, (err) => {
            if (err) return res.status(400).send(err);

            Tweet.findOne({ _id: req.body.tweetId }, (err, tweet) => {
                if (err) return res.status(400).send(err);
                Tweet.updateOne({ _id: req.body.tweetId }, { retweets: tweet.retweets + 1 }, (err, data) => {
                    if (err) return res.status(400).send(err);

                    return res.status(200).send('retweeted')

                })

            })

        })

    })

}

exports.likes = async (req, res) => {

    await User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) return res.status(400).send(err);

        user.likes.push(req.body.tweetId)
        console.log(user)

        User.updateOne({ _id: req.body.userId }, { likes: user.likes }, (err, updated) => {

            if (err) return res.status(400).send(err);

            Tweet.findOne({ _id: req.body.tweetId }, (err, tweet) => {

                if (err) return res.status(400).send(err);

                Tweet.updateOne({ _id: req.body.tweetId }, { likes: tweet.likes + 1 }, (err) => {

                    if (err) return res.status(400).send(err);

                    return res.status(200).send('like done')

                })

            })

        })

    })

}


exports.unlike = async (req, res) => {
    console.log(req.body)
    await User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err)
            return res.status(400).send(err);

        let likes = user.likes.filter((element) => {
            return element.toString() !== req.body.tweetId
        })

        User.updateOne({ _id: req.body.userId }, { likes: likes }, (err) => {
            if (err)
                return res.status(400).send(err);

            Tweet.findOne({ _id: req.body.tweetId }, (err, tweet) => {

                if (err) return res.status(400).send(err);
                Tweet.updateOne({ _id: req.body.tweetId }, { likes: tweet.likes - 1 }, (err, data) => {
                    if (err) return res.status(400).send(err);

                    return res.status(200).send('unlike done');

                })

            })

        })

    })
}


exports.findUser = async (req, res) => {
    let search = req.params.search
    console.log(search)

    const allUsers = await User.find().populate('tweets').populate('userId')
    const users = allUsers.filter((user) => {
        return user.name == search
    })
    // console.log(users[0].tweets, "asdafasfsa")
    return res.status(200).json(users[0]);
}