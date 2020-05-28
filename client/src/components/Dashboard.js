import React from 'react'
import {connect} from 'react-redux'
import {clear_error} from '../actions/errorActions'
import {getWallet} from '../actions/walletActions'
import Header from './Header'
import Account from './Account'

class Dashboard extends React.Component{
    
    componentDidMount(){
       this.props.getWallet()
    }

    componentDidUpdate(prevProps){
        const {error,isAuthenticated,loadingData} = this.props
        if (error !== prevProps.error){
            if(error.id === 'GET_WALLET_FAILED'){
                this.setState({msg:error.msg.msg})
            }else{
                this.setState({msg:null})
            }
        }
        if (!isAuthenticated){
            this.props.clear_error()
            this.props.history.push('/login')
        }
        
    }

    render(){
        
        return (
            <div>
                <Header/>
                <Account/>
            </div>
        )
    }
}
const mapStatetoProps = (state) =>({
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated,
    loadingData: state.wallet.isloading
})

export default connect(mapStatetoProps,{getWallet,clear_error})(Dashboard)