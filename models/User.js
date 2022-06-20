const mongoose = require('mongoose');
const Validate = require('validator')


const UserSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true, 'Please provide name'],
        maxlength : 56,
        minlength : 3,
    },

    email : {
        type : String,
        required : [true, 'Please provide name'],
        unique : true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        },
    },

    password : {
        type : String,
        required : [true, 'Please provide password'],
        maxlength : 56,
        minlength : 6,
    },








    
})
module.exports = mongoose.Model('User', UserSchema);
