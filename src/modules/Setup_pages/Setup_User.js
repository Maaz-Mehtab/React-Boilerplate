import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SetupUser, AddUser, EditUser, DeleteUser, SearchUser } from '../../store/Actions/Setup_userAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { SessionManager } from '../Helper/SessionsManager';
class Setup_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GetAllUser: [],
      selectedUser: [],
      ddl: [],
      modal: false,
      user_name: '',
      email: '',
      search_name: '',
      search_email: '',
      modal_role: 0,
      search_role: 0,
      search_department: 0,

      modal_dapartment: 0,
      edituserid: 0,
      IsEdit: false,
    }
    this.toggle = this.toggle.bind(this);
    this.ModelRoleChange = this.ModelRoleChange.bind(this);
    this.ModelDepartmentChange = this.ModelDepartmentChange.bind(this);
    this.SearchRoleChange = this.SearchRoleChange.bind(this);
    this.SearchDepartmentChange = this.SearchDepartmentChange.bind(this);
    this.AddOnChange = this.AddOnChange.bind(this);
    this.searchOnchange = this.searchOnchange.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.editModalUser = this.editModalUser.bind(this);
    this.searchUser = this.searchUser.bind(this);
  }
  componentWillMount() {
    // this.props.isSetupUser()
    this.DropDownListAPI();
    this.GetAllUser();
  }

  DropDownListAPI() {
    axios.get(SessionManager.API+"ddl.php?")
      .then(result => {
        console.log("result", result.data)
        this.setState({
          ddl: result.data
        })
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  GetAllUser() {
    axios.get(SessionManager.API+"GetAllUser.php?")
      .then(result => {
        console.log("result", result.data)
        this.setState({
          GetAllUser: result.data[0].record,
          selectedUser: result.data[0].record
        }, () => {
          console.log("this.state.GetAllUser", this.state.GetAllUser);
        })
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  edituser(val) {
    console.log("val", val);
    this.toggle();
    this.setState({
      IsEdit: true,
      user_name: val.FullName,
      email: val.Email,
      modal_role: val.RoleId,
      modal_dapartment: val.DepartmentId,
      edituserid: val.userId

    })
  }
  editModalUser() {
    let obj = {
      id: this.state.edituserid,
      FullName: this.state.user_name,
      Email: this.state.email,
      RoleId: parseInt(this.state.modal_role),
      DepartmentId: parseInt(this.state.modal_dapartment),
    }
    console.log("obj", obj);


    this.toggle();
    this.ModalclearAll();
    this.setState({
      IsEdit: false
    })
    axios.get(SessionManager.API+"EditUser.php?id=" + obj.id + "&FullName=" + obj.FullName + "&Email=" + obj.Email + "&RoleId=" + obj.RoleId + "&DepartmentId=" + obj.DepartmentId)
      .then(result => {
        console.log("result", result.data)
        this.setState({
          GetAllUser: result.data[0].record,
          selectedUser: result.data[0].record
        }, () => {
          console.log("this.state.GetAllUser", this.state.GetAllUser);
        })
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
    // this.props.isEditUser(obj);
  }

  deleteUser(val) {
    console.log("val", val);
    console.log(SessionManager.API+"DeleteUser.php?id=" + val.userId);

    axios.get(SessionManager.API+"DeleteUser.php?id=" + val.userId)
      .then(result => {
        console.log("result", result.data)
        this.setState({
          GetAllUser: result.data[0].record,
          selectedUser: result.data[0].record
        }, () => {
          console.log("this.state.GetAllUser", this.state.GetAllUser);
        })
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
    // this.props.isDeleteUser(val)
  }
  ModelRoleChange(event) {
    this.setState({ modal_role: event.target.value });
  }
  ModelDepartmentChange(event) {
    this.setState({ modal_dapartment: event.target.value });
  }
  SearchRoleChange(event) {
    this.setState({ search_role: event.target.value });
  }
  SearchDepartmentChange(event) {
    this.setState({ search_department: event.target.value });
  }
  AddUser() {
    let obj = {
      FullName: this.state.user_name,
      Email: this.state.email,
      Password: '123123',
      RoleId: parseInt(this.state.modal_role),
      DepartmentId: parseInt(this.state.modal_dapartment),
      IsEnable: 1,
      IsActive: 1,
      CreatedDate: new Date().getTime(),
      CreatedBy: 1,
      ModifiedDate: 0,
      ModifiedBy: 0
    }
    console.log("obj", obj);

    axios.get(SessionManager.API+"AddUser.php?FullName=" + obj.FullName + "&Email=" + obj.Email + "&Password=" + obj.Password + "&RoleId=" + obj.RoleId + "&DepartmentId=" + obj.DepartmentId + "&IsEnable=" + obj.IsEnable +
      "&IsActive=" + obj.IsActive + "&CreatedDate=" + obj.CreatedDate + "&CreatedBy=" + obj.CreatedBy + "&ModifiedDate=" + obj.ModifiedDate + "&ModifiedBy=" + obj.ModifiedBy)
      .then(result => {
        console.log("add result", result.data)
        this.setState({
          GetAllUser: result.data[0].record,
          selectedUser: result.data[0].record
        }, () => {
          console.log("this.state.GetAllUser", this.state.GetAllUser);
        })
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
    this.ModalclearAll();
    this.toggle();

  }
  AddOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  clearAll() {
    this.setState({
      search_role: 0,
      search_department: 0,
      search_email: '',
      search_name: ''

    })
  }
  ModalclearAll() {
    this.setState({
      modal_role: 0,
      modal_dapartment: 0,
      user_name: '',
      email: ''

    })
  }
  searchOnchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  searchUser() {
    let obj = {
      DepartmentId: this.state.search_department,
      RoleId: this.state.search_role,
      FullName: this.state.search_name,
      Email: this.state.search_email
    }
    console.log("obj", obj);
    let record = this.state.GetAllUser.filter(a => a.RoleId == this.state.search_role || a.DepartmentId == this.state.search_department || a.FullName == this.state.search_name || a.Email == this.state.search_email)
    console.log("record", record);
    this.setState({
      selectedUser: record
    })
  }
  render() {

    let roles = [];
    let department = [];
    let setup_user = [];
    if (this.state.ddl.length > 0) {
      console.log("ddl", this.state.ddl);
      roles = this.state.ddl[0].data1
      department = this.state.ddl[0].data;
      // setup_user = this.state.GetAllUser[0].record;
    }
    // console.log("setup_user",setup_user);
    return (
      <div id="App">
        <div className="mt-4" style={{ width: '90%', margin: '0 auto' }}>
          <div class="container-fluid bg-chart">
            <p class="text-light pt-2 pb-2 font-weight-bold cent">Search</p>
          </div>
          <div class="container-fluid  bg-light">
            <div className="row">
              <div className="col-sm-12 " style={{ margin: '0 auto' }}>
                <form style={{ marginTop: '40px' }}>
                  <div className="form-group row mt-2">
                    <div className="col-sm-3 d-inline-block">
                      <label for=" ">Role</label>
                      <select className="form-control txt_SearchUserName" value={this.state.search_role} onChange={this.SearchRoleChange}>
                        <option value={0}>--Select--</option>
                        {roles.length > 0 &&
                          (roles.map((val, ind) => {
                            return (
                              <option key={ind} value={val.Role_Id}>{val.RoleName}</option>
                            )
                          }))
                        }
                      </select>
                    </div>
                    <div className="col-sm-3">
                      <label for=" ">User Name</label>
                      <input name="search_name" value={this.state.search_name} onChange={this.searchOnchange} type="text" className="form-control txt_SearchUserName " />
                    </div>
                    <div className="col-sm-3">
                      <label for=" ">Email (Login-Id)</label>
                      <input name="search_email" value={this.state.search_email} onChange={this.searchOnchange} type="email" className="form-control txt_SearchEmail " />
                    </div>
                    <div className="col-sm-3 d-inline-block">
                      <label for=" ">Department</label>
                      <select className="form-control txt_SearchUserName" value={this.state.search_department} onChange={this.SearchDepartmentChange}>
                        <option value={0}>--Select--</option>
                        {department.length > 0 &&
                          (department.map((val, ind) => {
                            return (
                              <option key={ind} value={val.Department_Id}>{val.DepartmentName}</option>
                            )
                          }))
                        }
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 "></div>
                <div className="col-sm-6  ">
                  <div className="col-sm-3 float-right mb-2">
                    <button onClick={this.clearAll} className="btn btn-block btn-sm btn-outline-danger mt-2 float-right">Cancel</button>
                  </div>
                  <div className="col-sm-3 float-right">
                    <button onClick={this.searchUser} className="btn btn-block  btn-sm  btn-outline-success mt-2 mb-2 float-right">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid bg-chart">
            <p class="text-light pt-2 pb-2 font-weight-bold cent">Records</p>
          </div>
          <div class=" container-fluid bg-white">
            <div class="row">
              <div class="col-lg-12">
                <div class="wrapper wrapper-content animated fadeInUp">
                  <div class="panel ">
                    <div class="panel-body">
                      <input type="button" data-toggle="modal" data-target="#CreateProjectModal" class="openmodal" style={{ display: 'none' }} />
                      <button type="button" class="muModal btn btn-outline-success pull-right mb-2 pr-4 pl-4 cent btn_AddItem" onClick={() => { this.setState({ IsEdit: false }); this.toggle() }}><i class="fa fa-plus"></i>Add </button>
                      <div class="project-list">
                        <div class="table-responsive-sm">
                          <table class="table table-hover">
                            <thead class="bg-chart text-light">
                              <tr>
                                <th className="panel-th1">S.No</th>
                                <th className="panel-th2">Role </th>
                                <th className="panel-th3">User Name </th>
                                <th className="panel-th4">Email (Login-Id)</th>
                                <th className="panel-th5">Department</th>
                                <th className="panel-th6">Action</th>
                              </tr>
                            </thead>
                            {this.state.GetAllUser.length > 0 &&
                              <tbody>
                                {(this.state.selectedUser.map((val, ind) => {

                                  return (
                                    <tr key={ind}>
                                      <td> {ind + 1} </td>
                                      <td className="project-title text-center">
                                        {val.RoleName}
                                      </td>
                                      <td className="project-title text-center">
                                        {val.FullName}
                                      </td>
                                      <td className="project-title text-center">
                                        {val.Email}
                                      </td>
                                      <td className="project-title text-center">
                                        {val.DepartmentName}
                                      </td>
                                      <td className="project-actions text-center">

                                        <button onClick={this.edituser.bind(this, val)} className="btn btn-sm btn-outline-success mb-2 mr-2 ">
                                          <span aria-hidden="true" className="fa fa-edit btn-outline-success p-1"></span>
                                        </button>

                                        <button onClick={this.deleteUser.bind(this, val)} className="btn btn-sm  btn-outline-danger mb-2 ml-2">
                                          <span aria-hidden="true" class="btn-outline-danger fa fa-trash p-1"></span>
                                        </button>
                                      </td>
                                    </tr>
                                  )
                                }))}
                              </tbody>
                            }
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader className="modal-header bg-chart text-light container center" toggle={this.toggle}>Add Edit/User</ModalHeader>
            <ModalBody className="modal-body">
              <div class="form-horizontal">
                <div class="form-group">
                  <div class="modal-body" style={{ paddingBottom: '10px', borderBottomWidth: '10px', paddingTop: '10px', height: 'auto' }}>
                    <input name="ctl00$MainContent$hfModalId" type="hidden" id="MainContent_hfModalId" class="MainContent_hfModalId" />
                    <div class="form-group">
                      <div class="col-lg-12">
                        <label for="exampleInputPassword2">Role </label>
                        <span id="MainContent_RequiredFieldValidator5" style={{ color: 'Red', display: 'none' }}></span>
                        <select className="form-control" value={this.state.modal_role} onChange={this.ModelRoleChange}>
                          <option value={0}>--Select--</option>
                          {roles.length > 0 &&
                            (roles.map((val, ind) => {
                              console.log("val", val)
                              return (
                                <option key={ind} value={val.Role_Id}>{val.RoleName}</option>
                              )
                            }))
                          }
                        </select>
                      </div>
                      <div class="col-lg-12">
                        <label for="exampleInputPassword2">Department </label>
                        <span id="MainContent_RequiredFieldValidator4" style={{ color: 'Red', display: 'none' }}></span>
                        <select className="form-control" value={this.state.modal_dapartment} onChange={this.ModelDepartmentChange}>
                          <option value={0}>--Select--</option>
                          {department.length > 0 &&
                            (department.map((val, ind) => {

                              return (
                                <option key={ind} value={val.Department_Id}>{val.DepartmentName}</option>
                              )
                            }))
                          }
                        </select>
                      </div>
                      <label class="col-lg-12">User Name </label>
                      <div class="col-lg-12">
                        <input type="email" name="user_name" value={this.state.user_name} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
                      </div>
                      <label class="col-lg-12">Email (Login-Id)</label>
                      <div class="col-lg-12">
                        <input type="email" name="email" value={this.state.email} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              {(this.state.IsEdit == false) ?
                <Button color="primary" onClick={this.AddUser.bind(this)}>Add</Button>
                :
                <Button color="primary" onClick={this.editModalUser.bind(this)}>Edit</Button>
              }
              <Button color="secondary" onClick={() => { this.toggle(); this.ModalclearAll(); }}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    current_user: state.root.current_user,
    current_user_role: state.root.current_user_role,
    setup_user: state.Setup_UserReducer.setup_user,
    roles: state.Setup_UserReducer.roles,
    department: state.Setup_UserReducer.department,
    record: state.Setup_UserReducer.record,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    isSetupUser: () => {
      dispatch(SetupUser())
    },
    isAddUser: (obj) => {
      dispatch(AddUser(obj))
    },
    isEditUser: (obj) => {
      dispatch(EditUser(obj))
    },
    isDeleteUser: (obj) => {
      dispatch(DeleteUser(obj))
    },
    isSearchUser: (obj, data, roles, department) => {
      dispatch(SearchUser(obj, data, roles, department))
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Setup_User);





