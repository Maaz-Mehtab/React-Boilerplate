import React, { Component } from 'react';
import './Login.css';
import './Sidebar.css';
import history from '../History';
import { SessionManager } from './Helper/SessionsManager';
import axios from 'axios';
var jwt = require('jwt-simple');
var payload;
var secret = '#34$';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            // email: 'maaz@gmail.com',
            // password: '123123',
            email: '',
            password: '',
            ResponseData: undefined
        }
        this.Login = this.Login.bind(this)
        this.onChangeState = this.onChangeState.bind(this)
    }
    onChangeState(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    Login() {
        // axios.get("http://192.168.18.3/React-web/Login.php?Email=maaz@gmail.com&Password=123123")
        axios.get(SessionManager.API + "Login.php?Email=" + this.state.email + "&Password=" + this.state.password)
            .then(result => {
                console.log("result", result.data[0]);
                if (result.data[0] != 0) {
                    this.setState({
                        data: result.data[0].data,
                        data1: result.data[0].data1,
                        data2: result.data[0].data2,
                        isLoading: false
                    }, () => {
                        // payload = this.state.data;
                        payload = result.data;
                        if (payload != 0) {
                            var token = jwt.encode(payload, secret);
                            localStorage.setItem("User", JSON.stringify(token))
                            SessionManager.Userdata = this.state.data;
                            SessionManager.RoleAccess = this.state.data1;
                            SessionManager.Menu = this.state.data2;
                            history.push('/');
                        }
                        else {
                            alert("Email / Password Incorrect");
                        }
                    })
                }
                else{
                    alert("Your Email and Password Incorrect");
                }
            })
            .catch(error => this.setState({
                error,
                isLoading: false
            }
            )

            );


    }

    render() {

        return (
            <div className="container-fluid loginColumns animated fadeInDown">
                <div className="row">
                    <div className="col-sm-7 col-md-8 col-lg-8 loginColumnsimg">
                        <img src={'assets/images/newlog.png'} className="img-responsive" alt="Alternate Text" />
                    </div>
                    <div className="col-sm-5 col-md-4 col-lg-4">
                        <div className="login-bar">
                            <div className="m-t" role="form">
                                <div className="form-group">
                                    <img className="img-responsive" src={'assets/images/logo1.png'} alt='Profile-Photo' style={{ width: '200px' }} /></div>
                                <h3>Login to continue</h3>
                                <div className="form-group" id="divform">
                                    <div className="form-group">
                                        <input name="email" type="email" value={this.state.email} onChange={this.onChangeState} className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" value={this.state.password} onChange={this.onChangeState} type="Password" className="form-control" placeholder="Password" />
                                    </div>
                                    <button className="btn btn-success block full-width m-b" onClick={this.Login}  >Login</button>

                                    <label className="alert-link" />
                                    <div className="" id="divError" visible="false">
                                    </div>
                                    <a>
                                        <small>Forgot password?</small>
                                    </a>
                                </div>
                            </div>
                            <div className="m-t">
                                Copyright © 2016-2018 Sybrid Pvt LTD
					</div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Login;
