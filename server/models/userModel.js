const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Account = require('../models/accountModel')

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){if(validator.isEmpty(value) || !validator.isEmail(value)){throw new Error ('Not valid email!')}}
    },
    firstname:{
        type:String,
        required:true,
        minlength:1,
        maxlength:30,
        trim:true,
        validate(value){if(validator.isEmpty(value) || validator.isNumeric(value)){throw new Error ('Not valid firstname!')}}
    },
    surname:{
        type:String,
        required:true,
        minlength:1,
        maxlength:30,
        trim:true,
        validate(value){if(validator.isEmpty(value) || validator.isNumeric(value)){throw new Error ('Not valid surname!')}}
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

UserSchema.methods.toJSON = function(){

    const userobject = this.toObject()
    delete userobject.password
    delete userobject.tokens
    return userobject
}

UserSchema.statics.findCridentials = async function(email,password){

    const user = await User.findOne({email:email})
    if(!user){throw new Error('Not correct cridentials!')}
    const isvalid = await bcrypt.compare(password,user.password)
    if(!isvalid){throw new Error('Not correct cridentials!')}
    return user
}

UserSchema.methods.generateToken = async function () {

    const token = jwt.sign({_id:this._id.toString()},'secretkey')
    this.tokens = this.tokens.concat({token:token})
    await this.save()
    return token
}

UserSchema.statics.logoutUser = async function (user,token) {
    
    user.tokens = user.tokens.filter((value)=>value.token !== token)
    return user
}

UserSchema.statics.deleteOtherUsers = async function (user,token){

    user.tokens = user.tokens.filter((value)=>value.token === token)
    return user
}


UserSchema.pre('save',async function(next){

    if(this.isModified('password')){this.password = await bcrypt.hash(this.password,8)}
    next()
})

UserSchema.methods.createAccount = async function(){
    
    const account = new Account({owner:this._id.toString()})
    return account
}

const User = mongoose.model('users',UserSchema)

module.exports = User