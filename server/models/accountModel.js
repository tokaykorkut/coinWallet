const mongoose = require('mongoose')
const validator = require('validator')

const AccountSchema = new mongoose.Schema({
    owner:{
        type:String,
        required:true,
        unique:true
    },
    wallet:{
        BTC:{
            type:mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        XRP:{
            type:mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        DASH:{
            type:mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        ETH:{
            type:mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        LTC:{
            type:mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        TL:{
            type:mongoose.Schema.Types.Decimal128,
            default:"0.2",
        }
    }
},{
    timestamps:true
})

AccountSchema.pre('save',function(next){
    setTimeout(() => {
        
    }, 2000);
    next()
})
const Account = mongoose.model('accounts',AccountSchema)

module.exports = Account