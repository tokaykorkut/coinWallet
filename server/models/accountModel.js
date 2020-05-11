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
            type:mongoose.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid BTC!')}}
        },
        XRP:{
            type:mongoose.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid XRP!')}}
        },
        DASH:{
            type:mongoose.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid DASH!')}}
        },
        ETH:{
            type:mongoose.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid ETH!')}}
        },
        LTC:{
            type:mongoose.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid LTC!')}}
        },
        TL:{
            type:mongoose.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid TL!')}}
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