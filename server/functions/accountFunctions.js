const Account = require('../models/accountModel')

const findRatio = (conversion_type)=>{
    let rate = 1
    switch (conversion_type) {
        //BTC
        case 'BTC/XRP':
            rate = 44.512
            return rate
        case 'BTC/DASH':
            rate = 124.58240270
            return rate
        case 'BTC/ETH':
            rate = 46.67708239
            return rate
        case 'BTC/LTC':
            rate = 209.70292842
            return rate
        case 'BTC/TL':
            rate = 60999.31
            return rate
        //XRP
        case 'XRP/BTC':
            rate = 0.00002242
            return rate
        case 'XRP/DASH':
            rate = 0.00279217
            return rate
        case 'XRP/ETH':
            rate = 0.00103987
            return rate
        case 'XRP/LTC':
            rate = 0.00470581
            return rate
        case 'XRP/TL':
            rate = 1.36
            return rate
        //DASH
        case 'DASH/BTC':
            rate = 0.00796630
            return rate
        case 'DASH/XRP':
            rate = 358.29408032
            return rate
        case 'DASH/ETH':
            rate = 0.37158169
            return rate
        case 'DASH/LTC':
            rate = 1.68337989
            return rate
        case 'DASH/TL':
            rate = 484.05
            return rate
        //ETH
        case 'ETH/BTC':
            rate = 0.02149784
            return rate
        case 'ETH/XRP':
            rate = 963.72022678
            return rate
        case 'ETH/DASH':
            rate = 2.69481921
            return rate
        case 'ETH/LTC':
            rate = 4.53692287
            return rate
        case 'ETH/TL':
            rate = 1301.01
            return rate
        //LTC
        case 'LTC/BTC':
            rate = 0.00474753
            return rate
        case 'LTC/XRP':
            rate = 212.14335684
            return rate
        case 'LTC/DASH':
            rate = 0.59229930
            return rate
        case 'LTC/ETH':
            rate = 0.22029896
            return rate
        case 'LTC/TL':
            rate = 286.33
            return rate
        //TL
        case 'TL/BTC':
            rate = 0.00001651
            return rate
        case 'TL/XRP':
            rate = 0.74178560
            return rate
        case 'TL/DASH':
            rate = 0.00207147
            return rate
        case 'TL/ETH':
            rate = 0.00077063
            return rate
        case 'TL/LTC':
            rate = 0.00349265
            return rate
        default:
            return rate
    }
}


const convertAmount = async(from,amount)=>{
    const commission = 0.03 * amount
    const returnAmount = amount - commission
    const cashBox = await Account.findOne({owner:"5eb98ec98f9e6e1e14a5cb3f"})
    cashBox.wallet[from] = (parseFloat(cashBox.wallet[from])+commission).toString(10)
    await cashBox.save()
    return returnAmount
}


module.exports = {findRatio,convertAmount}