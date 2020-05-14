import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import {store} from './store'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import PrivateRoute from './privateRoute'

export default class App extends React.Component{


    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <PrivateRoute path='/' exact component={Dashboard}/>
                        <Route path='*' component={()=>"404"}/>
                    </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}