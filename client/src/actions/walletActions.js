import axios from 'axios'
import {get_error} from '../actions/errorActions'
import tokenConfig from './functions/tokenConfig'

export const getWallet = () => async (dispatch,getState) =>{
    try {
        const res = await axios.get('/get_wallet',tokenConfig(getState))
        await dispatch({type:'WALLET_LOADING'})
        await dispatch({type:'GET_WALLET_SUCCESS',payload:res.data})
    } catch (error) {
        await dispatch(get_error(error.response.data,error.response.status,'GET_WALLET_FAILED'))
        await dispatch({type:'GET_WALLET_FAILED'})
    }
}


export const sellMoney = (body) => async (dispatch,getState) =>{
    try {
        const res = await axios.post('/sell',body,tokenConfig(getState))
        await dispatch({type:'WALLET_LOADING'})
        await dispatch({type:'SELL_SUCCESS',payload:res.data})
    } catch (error) {
        await dispatch(get_error(error.response.data,error.response.status,'SELL_FAILED'))
        await dispatch({type:'SELL_FAILED'})
    }
    
}

export const buyMoney = (body) => async (dispatch,getState) =>{
    try {
        const res = await axios.post('/buy',body,tokenConfig(getState))
        await dispatch({type:'WALLET_LOADING'})
        await dispatch({type:'BUY_SUCCESS',payload:res.data})
    } catch (error) {
        await dispatch(get_error(error.response.data,error.response.status,'BUY_FAILED'))
        await dispatch({type:'BUY_FAILED'})
    }
}