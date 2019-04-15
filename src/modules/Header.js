import React, { Component } from 'react';
import './Sidebar.css';
import history from '../History';
class Header extends Component {
  constructor(props){
    super(props);

  }
  logout(){
    history.push('/Login')
    localStorage.removeItem('Users')
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-chart ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 "></div>
            <div className="col-sm-6">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                  <a className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></a>
                  {/* <a className="nav-item nav-link" >Features</a>
                  <a className="nav-item nav-link" >Pricing</a>
                  <a className="nav-item nav-link disabled">Disabled</a> */}
                </div>
              </div>
            </div>

          </div>
          <div className="col-sm-3">
            <a onClick={this.logout.bind(this)} className="float-right text-light" style={{ fontSize: '16px' }}>
              Logout
                      <i className="fa fa-sign-out text-white pl-3"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
