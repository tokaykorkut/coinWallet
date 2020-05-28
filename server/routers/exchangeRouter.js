const express = require('express')
const authentication = require('../middleware/authentication')
const Account = require('../models/accountModel')
const {findRatio,convertAmount} =require('../functions/accountFunctions')
const router = express.Router()

/**
 * buy          X
 * sell         X
 * get_wallet   X
 */

router.post('/buy',authentication,async(req,res)=>{
    try {
        const conversion_type = req.body.from+"/"+req.body.to
        const rate = await findRatio(conversion_type)
        const conversion_amount = await convertAmount(req.body.from,req.body.amount)
        const account = await Account.findOne({owner:req.user._id})
        await account.makeExchange(req.body.amount,conversion_amount,rate,req.body.from,req.body.to)
        await account.save()
        const wallet = account.wallet
        res.status(200).json({wallet})
    } catch (error) {
        res.status(400).json({msg:'Buy operation could not be processed!'})
    }
})

router.post('/sell',authentication,async(req,res)=>{
   
    try {
        const conversion_type = req.body.from+"/"+req.body.to
        const rate = await findRatio(conversion_type)
        const conversion_amount = await convertAmount(req.body.from,req.body.amount)
        const account = await Account.findOne({owner:req.user._id})
        await account.makeExchange(req.body.amount,conversion_amount,rate,req.body.from,req.body.to)
        await account.save()
        const wallet = account.wallet
        res.status(200).json({wallet})
    } catch (error) {
        res.status(400).json({msg:'Sell operation could not be processed!'})
    }
})

router.get('/get_wallet',authentication,async(req,res)=>{
    try {
        const account = await Account.findOne({owner:req.user._id.toString()})
        const wallet = account.wallet
        res.status(200).json({wallet})
    } catch (error) {
        res.status(400).json({msg:'Wallet could not be gotten!'})
    }
})


module.exports = router