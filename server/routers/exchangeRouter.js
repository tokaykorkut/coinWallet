const express = require('express')
const authentication = require('../middleware/authentication')
const Account = require('../models/accountModel')
const router = express.Router()

/**
 * buy
 * sell
 * wallet_data
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

router.get('/wallet_data',authentication,async(req,res)=>{
    try {

    } catch (error) {
        
    }
})


module.exports = router