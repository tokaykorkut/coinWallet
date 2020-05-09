const mongoose = require('mongoose')
const validator = require('validator')

const AccountSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    wallet:{
        BTC:{
            type:mongoose.Schema.Types.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid BTC!')}}
        },
        XRP:{
            type:mongoose.Schema.Types.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid XRP!')}}
        },
        DASH:{
            type:mongoose.Schema.Types.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid DASH!')}}
        },
        ETH:{
            type:mongoose.Schema.Types.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid ETH!')}}
        },
        LTC:{
            type:mongoose.Schema.Types.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid LTC!')}}
        },
        TL:{
            type:mongoose.Schema.Types.Decimal128,
            default:0.0,
            validate(value){if(validator.isEmpty(value) || !validator.isNumeric(value)){throw new Error ('Not valid TL!')}}
        }
    }
},{
    timestamps:true
})

const Account = mongoose.model('Account',AccountSchema)

module.exports = Account