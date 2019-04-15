import React, { Component } from 'react';
import './Sidebar.css';
import SideBar from './sidebar';
import Header from './Header';
import routes from './routes';
import Login from './Login';
import { SessionManager } from './Helper/SessionsManager';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
var jwt = require('jwt-simple');
var payload;
var secret = '#34$';
class Main extends Component {

    render() {
        let data=JSON.parse(localStorage.getItem('User'))
            var decode = jwt.decode(data, secret);
             SessionManager.Userdata=decode[0].data;
            SessionManager.RoleAccess=decode[0].data1;
            SessionManager.Menu=decode[0].data2;
       
        if(data==undefined && data==null){
            return <Redirect push to="/Login" />
       }
        return (
            <div>
                <Header />
                <SideBar data={this.props.current_user} data2={this.props.current_user_role} />
                <main className="main">
                    <div>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                    <route.component {...props} />
                                )} />)
                                    : (null);
                            },
                            )}
                            <Redirect from="/" to="/" />
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        current_user: state.root.current_user,
        current_user_role: state.root.current_user_role,
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         isLogin_user: (obj) => {
//             dispatch(Login_user(obj))
//         }
//     }
// }
export default connect(mapStateToProps, null)(Main);