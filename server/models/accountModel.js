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
            type:String,//mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        XRP:{
            type:String,//mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        DASH:{
            type:String,//mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        ETH:{
            type:String,//mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        LTC:{
            type:String,//mongoose.Schema.Types.Decimal128,
            default:"0.2",
        },
        TL:{
            type:String,//mongoose.Schema.Types.Decimal128,
            default:"0.2",
        }
    }
},{
    timestamps:true
})

AccountSchema.methods.makeExchange = async function(rawamount,amount,rate,from,to){

    this.wallet[from] = (parseFloat(this.wallet[from]) - rawamount).toString(10)
    const exchange = amount * rate
    this.wallet[to] = (parseFloat(this.wallet[to]) + exchange).toString(10)
    await this.save()
}

const Account = mongoose.model('accounts',AccountSchema)

module.exports = Account