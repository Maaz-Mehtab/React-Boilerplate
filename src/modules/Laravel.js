import React, { Component } from 'react';
// import './Sidebar.css';
import { connect } from 'react-redux';
class Laravel extends Component {
  render() {
    console.log("current_user",this.props.current_user)
    console.log("current_user_role",this.props.current_user_role)
    return (
      <div id="App">
     <div id="page-wrap">
        <h1>Laravel Page</h1>
      </div>
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
export default connect(mapStateToProps, null)(Laravel);





