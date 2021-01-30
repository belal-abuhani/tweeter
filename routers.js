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
router.post('/addBookmark', user.signup);
router.post('/deleteBookmark', user.signup);
router.post('/retweet', user.signup);
router.post('/like', user.signup);
router.post('/unlike', user.signup);



router.post('/comment', comment.comment);
router.post('/likeOnComment', comment.likeOnComment);
router.post('/commentUnLike', comment.commentUnLike);
















module.exports = router;