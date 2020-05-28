import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store'
import {loadUser} from './actions/authActions'
import Root from './root'


export default class App extends React.Component{

    componentDidMount(){
        store.dispatch(loadUser())
    }

    render(){
        return(
            <Provider store={store}>
              <Root />
            </Provider>
        )
    }
}