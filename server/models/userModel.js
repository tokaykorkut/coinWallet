const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
        trim:true,
        validate(value){if(validator.isEmpty(value) || validator.isNumeric(value)){throw new Error ('Not valid firstname!')}}
    },
    surname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
        trim:true,
        validate(value){if(validator.isEmpty(value) || validator.isNumeric(value)){throw new Error ('Not valid surname!')}}
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value){if(validator.isEmpty(value) || !validator.isEmail(value)){throw new Error ('Not valid email!')}}
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        validate(value){if(validator.isEmpty(value)){throw new Error('Not valid password!')}}
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
},{
    timestamps:true
})

const User = mongoose.Model('User',UserSchema)

module.exports = User