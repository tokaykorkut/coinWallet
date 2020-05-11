const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authentication = async(req,res,next)=>{
    const token = req.header('Authorization').split(" ")[1]
    if(!token){return res.status(400).json({msg:'No Token!'})}
    try {
        const decoded = jwt.verify(token,'secretkey')
        const user = await User.findOne({_id:decoded._id.toString(),'tokens.token':token})
        if(!user){return res.status(400).json({msg:'Not Authorizated!'})}
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(400).json({msg:'Not Authorizated!'})
    }
}

module.exports = authentication