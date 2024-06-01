const mongoose = require('mongoose');

//Schema refers to a the basic app structure or user model that we are creating
const userSchema = mongoose.Schema({
    name: {
        required: true,      //name is required
        type: String,
        trim: true,     //Remove all the leading and trailing spaces
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                //regex -> regular expression for checking email addresses
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: "Please enter a valid email",
        },
    },
    password: {
        required: true,
        type: String,
        // validate: {
        //     validator: (value) => {
        //         return value.length >= 6
        //     },
        //     message: "Please enter a password of length of 6 or more",
        // },
    },
    address: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: 'user'
    }
    //cart
})

const User = mongoose.model('User',userSchema);
module.exports = User;