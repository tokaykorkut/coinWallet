const initialState={
    isLoading:false,
    wallet:null
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_WALLET_SUCCESS':
            return{
                ...state,
                isLoading:false,
                ...action.payload
            }

        case 'GET_WALLET_FAILED':
            return{
                ...state,
                isLoading:false
            }
    
        case 'BUY_SUCCESS':
            return{
                ...state,
                isLoading:false,
                ...action.payload
            }

        case 'BUY_FAILED':
            return{
                ...state,
                isLoading:false
            }

        case 'SELL_SUCCESS':
            return{
                ...state,
                isLoading:false,
                ...action.payload
            }

        case 'SELL_FAILED':
            return{
                ...state,
                isLoading:false
            }

        case 'WALLET_LOADING': 
            return{
                ...state,
                isLoading:true
            }
            
        default:
            return state
    }
}