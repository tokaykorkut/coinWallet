const initialState={
    isAuthenticated:null,
    isLoading:false,
    user:null,
    token:localStorage.getItem('token')
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case 'USER_LOADING':
            return{
                ...state,
                isLoading:true
            }

        case 'LOGIN_SUCCESS':
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }

        case 'LOGIN_FAILED':
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                isLoading:false,
                user:null
            }

        case 'REGISTER_SUCCESS':
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }

        case 'REGISTER_FAILED':
            localStorage.removeItem('token')
            return{
                ...state,
                isAuthenticated:false,
                isLoading:false,
                token:null,
                user:null
            }

        case 'LOGOUT_SUCCESS':
            localStorage.removeItem('token')
            return{
                ...state,
                isAuthenticated:false,
                user:null,
                token:null,
                isLoading:false
            }

        case 'AUTH_ERROR':
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated:false,
                user:null,
                token:null,
                isLoading:false
            }

        case 'DELETE_PROFILE_SUCCESS':
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                isLoading:false,
                user:null
            }

        case 'UPDATE_PROFILE_SUCCESS':
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }

        case 'DELETE_OTHER_USERS':
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }

        default:
            return state
    }
}