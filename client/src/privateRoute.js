import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Login from './components/Login'
import {connect} from 'react-redux'

const PrivateRoute =  ({component: Component,isAuthenticated, ...rest})=>{
   
    return(
        <Route
        {...rest}
        render={ props =>(
            localStorage.getItem('token')
            //isAuthenticated 
            ? (
            <Component {...props} />
        ) : (
            <Redirect to='/login' component={Login}/>
            )
        )
        }
        />  
    )
}
const mapStateToProps = (state)=>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{})(PrivateRoute)