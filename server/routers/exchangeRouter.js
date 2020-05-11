const express = require('express')
const authentication = require('../middleware/authentication')
const Account = require('../models/accountModel')
const router = express.Router()

/**
 * buy
 * sell
 * get_wallet
 */

router.post('/buy',authentication,async(req,res)=>{
    try {

    } catch (error) {
        
    }
})

router.post('/sell',authentication,async(req,res)=>{
    try {

    } catch (error) {
        
    }
})

router.get('/get_wallet',authentication,async(req,res)=>{
    try {

    } catch (error) {
        
    }
})


module.exports = router