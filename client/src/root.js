import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import PrivateRoute from './privateRoute'

export default class Root extends React.Component{

    render(){
        return(
            <BrowserRouter>
            <Switch>
                <PrivateRoute path='/' exact component={Dashboard}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='*' component={()=>"404"}/>
            </Switch>
            </BrowserRouter>
        )
    }
}
