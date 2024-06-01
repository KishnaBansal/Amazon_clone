const express = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const authRouter = express.Router();

//SIGNUP ROUTE
authRouter.post('/api/signup', async (req, res) => {
    // get data from client
    const { name, email, password } = req.body;

    // post that data in database
    // return that data to user
    //In case of mongodb we have to check the data like having same email,etc. but in case of firebase it does it automatically

    //Always use try-catch block while using async-await
    try {
        const existingUser = await User.findOne({ email });  //Because findOne is a promise similar to future in dart
        if (existingUser) {
            //But we need to change the status codes also
            return req.status(400).json({ msg: "User with email already exists" });
        }

        const hashedPassword =  await bcryptjs.hash(password,8) 

        let user = new User({
            email,
            password: hashedPassword,  //because in user.js passwd. is there
            name,
        })
        user = await user.save();
        res.json(user);
    }
    catch(e) {
        res.status(500).json({error : e.message});
    }
});

module.exports = authRouter;  //Because by default authRouer was private but we needed to access it from outside the file also