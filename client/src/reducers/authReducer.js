const initialState={
    isAuthenticated:false,
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
        
        case 'USER_LOADED':
            return{
                ...state,
                ...action.payload,
                isLoading:false,
                isAuthenticated:true
                
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
                isLoading:false,
                isAuthenticated:false,
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
                isLoading:false,
                token:null,
                isAuthenticated:false,
                user:null
            }

        case 'LOGOUT_SUCCESS':
            localStorage.removeItem('token')
            return{
                ...state,
                user:null,
                token:null,
                isAuthenticated:false,
                isLoading:false
            }

        case 'AUTH_ERROR':
            localStorage.removeItem('token')
            return {
                ...state,
                user:null,
                token:null,
                isAuthenticated:false,
                isLoading:false
            }

        case 'DELETE_PROFILE_SUCCESS':
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isLoading:false,
                isAuthenticated:false,
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