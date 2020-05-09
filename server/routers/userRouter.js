const express = require('express')
const authentication = require('../middleware/authentication')
const User = require('../models/userModel')
const router = express.Router()

/**
 * log in
 * register
 * log out
 * update_profile
 * delete_profile
 */

router.post('/login',async(req,res)=>{
    try {

    } catch (error) {
        
    }
})

router.post('/register',async(req,res)=>{
    const newuser = req.body
    try {

    } catch (error) {
        res.status(400).json({msg:'user already exits!'})
    }
})

router.get('/logout',authentication,async(req,res)=>{
    try {

    } catch (error) {
        
    }
})

router.delete('/delete_profile',authentication,async(req,res)=>{
    try {

    } catch (error) {
        
    }
})

router.patch('/update_profile',authentication,async(req,res)=>{
    try {

    } catch (error) {
        
    }
})


 module.exports = router