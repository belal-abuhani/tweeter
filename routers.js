const express = require('express')
const router = express.Router();
const user = require('./controller/user');
const tweet = require('./controller/tweet');
// const auth = require("../controller/auth")




router.post('/signup', user.signup);












module.exports = router;