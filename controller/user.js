const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const User = require('../model/User');
// const auth = require("./auth")


//this schema to validate data from the client before saved it in database  
const userValidat = joi.object({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
    location: joi.string().required(),
    // phoneNumber: joi.string().min(6).required(),
});

// const loginSchema = joi.object({
//     email: joi.string().min(6).required().email(),
//     password: joi.string().min(6).required(),

// });


//this signup method for post requeset from client to save data in database 
exports.signup = async (req, res) => {
    // this validate methode to check the requirement data
    const { error } = await userValidat.validate(req.body)
    if (error) return res.send(error.details[0].message)

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
        location: req.body.location,
        // phoneNumber: req.body.phoneNumber
    });

    try {
        //save document(client) in mongoDB
        const savedUser = await user.save();
        const token = await jwt.sign({ _id: client._id }, process.env.TOKEN);
        res.header("login", token)
        res.json({ token, userId: savedUser._id })

    }
    catch (err) {
        res.status(400).send(err);
    }


}