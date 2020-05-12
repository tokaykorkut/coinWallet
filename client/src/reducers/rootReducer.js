import {combineReducers} from 'redux';
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import walletReducer from './walletReducer'

export default combineReducers({
    auth: authReducer,
    error:errorReducer,
    wallet:walletReducer
})