import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './components/Login'


const PrivateRoute =  ({component: Component, ...rest})=>{


    return(
        <Route
        {...rest}
        render={ props =>(
        rest.isAuthenticated ? (
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