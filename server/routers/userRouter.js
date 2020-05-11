const express = require('express')
const authentication = require('../middleware/authentication')
const User = require('../models/userModel')
const Account = require('../models/accountModel')
const router = express.Router()

/**
 * log in               X 
 * register             X create and send account   X
 * log out              X
 * update_profile       X
 * delete_profile       X delete account    X
 * delete_other_users   X
 * authentication_check X
 */

router.post('/login',async(req,res)=>{
    if (!req.body.email || !req.body.password){res.status(400).json({msg:"Please fill all fields!"})}
    try {
        const user = await User.findCridentials(req.body.email,req.body.password)
        const token = await user.generateToken()
        res.status(200).json({user,token})
    } catch (error) {
        res.status(400).json({msg:"Please enter email and/or password correctly!"})
    }
})

router.post('/register',async(req,res)=>{
    if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.surname){res.status(400).json({msg:"Please fill all fields!"})}
    const user = new User(req.body)
    const test = await User.findOne({email:req.body.email})
    if(test){return res.status(400).json({msg:'User already exists!'})}
    try {
        const token = await user.generateToken()
        await user.save()
        const account = await user.createAccount()
        await account.save()
        res.status(200).json({user,token,account})
    } catch (error) {
        res.status(400).json({msg:'User could not created!'})
    }
})

router.get('/logout',authentication,async(req,res)=>{
    try {
        req.user = await User.logoutUser(req.user,req.token)
        await req.user.save()
        res.status(200).json()
    } catch (error) {
        res.status(400).json({msg:'Something went wrong while loging out!'})
    }
})

router.delete('/delete_other_users',authentication,async(req,res)=>{
    try {
        req.user = await User.deleteOtherUsers(req.user,req.token)
        await req.user.save()
        const user = req.user
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({msg:'Something went wrong while deleting other users!'})
    }
})

router.delete('/delete_profile',authentication,async(req,res)=>{
    try {
        await req.user.remove()
        const account = await Account.findOne({owner:req.user._id.toString()}) 
        await account.remove()
        res.status(200).json()
    } catch (error) {
        res.status(400).json({msg:'User could not be deleted!'})
    }
})  

router.patch('/update_profile',authentication,async(req,res)=>{
    const keylist = Object.keys(req.body)
    try {
        keylist.map((value)=>{req.user[value] = req.body[value]})
        await req.user.save()
        const user = req.user
        res.status(200).json({user})
    } catch (error) {
        res.status(200).json({msg:'User data could not be updated!'})
    }
})

router.get('/authentication_check',async(req,res)=>{
    try {
        const user = User.findOne({'tokens.token':req.header('Authorization')})
        if(!user){return res.status(400).json({msg:'Not Aurhorizated!'})}
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({msg:'Not Aurhorizated!'})
    }
})

 module.exports = router