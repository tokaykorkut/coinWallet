export const get_error = (msg,status,id=null)=>{
    return{
        type:'GET_ERROR',
        payload: {msg,status,id}
    }
}

export const clear_error = ()=>{
    return{
        type:'CLEAR_ERROR'
    }
}