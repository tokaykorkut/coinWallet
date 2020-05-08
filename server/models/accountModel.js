const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    wallet:{
        BTC:{},
        XRP:{},
        DASH:{},
        ETH:{},
        LTC:{}
    }
},{
    timestamps:true
})

const Account = mongoose.model('Account',AccountSchema)

module.exports = Account