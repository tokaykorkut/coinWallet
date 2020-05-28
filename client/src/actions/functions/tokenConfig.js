const tokenConfig = (getState) =>{

    const token = getState().auth.token

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    if(token){config.headers['Authorization']=token}

    return config
}

export default tokenConfig