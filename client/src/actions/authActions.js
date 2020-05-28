import axios from 'axios'
import {get_error} from './errorActions'
import tokenConfig from './functions/tokenConfig'

export const loadUser = () => async (dispatch,getState) =>{

    try {
        const res = await axios.get('/authentication_check',tokenConfig(getState))
        await dispatch({type:'USER_LOADING'})
        await dispatch({type:'USER_LOADED',payload:res.data})
    } catch (error) {
        await dispatch(get_error(error.response.data,error.response.status))
        await dispatch({type:'AUTH_ERROR'})
    }
}

export const loginUser = (userInfo) => async (dispatch) =>{
    
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify(userInfo)
    try {
        const res = await axios.post('/login',body,config)
        await dispatch({type:'USER_LOADING'})
        await dispatch({type:'LOGIN_SUCCESS',payload:res.data})
    } catch (error) {
        await dispatch(get_error(error.response.data,error.response.status,'LOGIN_FAILED'))
        await dispatch({type:'LOGIN_FAILED'})
    }
}

export const logoutUser = () => async (dispatch,getState) =>{

    try {
        await axios.get('/logout',tokenConfig(getState))
        await dispatch({type:'LOGOUT_SUCCESS'})
    } catch (error) {
        await dispatch(get_error(error.response.data,error.response.status))
    }
}

export const registerUser = (userInfo) => async (dispatch) =>{
    
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify(userInfo)
    try {
        const res = await axios.post('/register',body,config)
        await dispatch({type:'USER_LOADING'})
        await dispatch({type:'REGISTER_SUCCESS',payload:res.data})
    } catch (error) {
        await dispatch(get_error(error.response.data,error.response.status,'REGISTER_FAILED'))
        await dispatch({type:'REGISTER_FAILED'})
    }
}

export const updateProfile = (userInfo) => async (dispatch,getState) =>{
    
    try {
        
    } catch (error) {
        
    }
}

export const deleteProfile = () => async (dispatch,getState) =>{

    try {
        
    } catch (error) {
        
    }
}

export const deleteOtherUsers = () => async (dispatch,getState) =>{

    try {
        
    } catch (error) {
        
    }
}


