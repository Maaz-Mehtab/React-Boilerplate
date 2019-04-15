import React, { Component } from 'react';
import { Route, Router,Switch } from 'react-router-dom';
import Main from './modules/Main';
import Login from './modules/Login';
import history from './History';
class Routers extends Component {
    render() {
        return (
            <Router history={history}>
            
            <Switch>
            
                    <Route exact path="/Login" component={Login} />
                    <Route  path="/" component={Main} />
                  
                  </Switch>
            </Router>
        )
    }
}

export default Routers;