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
                wallet: action.payload.wallet
            }

        case 'BUY_SUCCESS':
            return{
                ...state,
                isLoading:false,
                wallet: action.payload.wallet
            }

        case 'SELL_SUCCESS':
            return{
                ...state,
                isLoading:false,
                wallet: action.payload.wallet
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