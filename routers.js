const express = require('express')
const router = express.Router();
const user = require('./controller/user');
const tweet = require('./controller/tweet');
const comment = require('./controller/comment');

// const auth = require("../controller/auth")




router.post('/signup', user.signup);
router.post('/signin', user.signin);
router.post('/follow', user.signup);
router.post('/unfollow', user.signup);
router.post('/addBookmark', user.addBookmark);
router.post('/deleteBookmark', user.deleteBookmark);
router.post('/retweet', user.signup);
router.post('/like', user.likes);
router.post('/unlike', user.unlike);

router.get('/user/:search', user.findUser);




router.post('/comment', comment.comment);
router.post('/likeOnComment', comment.likeOnComment);
router.post('/commentUnLike', comment.commentUnLike);


router.post('/tweet', tweet.tweet);
router.get('/tweets', tweet.tweets);
router.get('/tweets/:userId', tweet.mytweets);















module.exports = router;