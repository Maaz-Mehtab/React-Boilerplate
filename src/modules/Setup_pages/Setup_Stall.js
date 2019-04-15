import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SetupUser, AddUser, EditUser, DeleteUser, SearchUser } from '../../store/Actions/Setup_userAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { SessionManager } from '../Helper/SessionsManager';
class Setup_Stall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Get_Stall: [],
            selectedUser: [],
            ddl: [],
            ddlHall: [],
            modal: false,
            stall_name: '',
            email: '',
            search_name: '',
            search_email: '',
            search_product: '',
            modal_hall: 0,
            search_role: 0,
            search_hall: 0,
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
        this.ddlHall = this.ddlHall.bind(this);

    }
    componentWillMount() {
        // this.props.isSetupUser()
        // this.DropDownListAPI();
        this.Get_Stall();

    }
    componentDidMount() {
        this.ddlHall();
    }


    ddlHall() {
        axios.get(SessionManager.API + "ddlHall.php?")
            .then(result => {
                this.setState({
                    ddlHall: result.data[0].data,
                }, () => {
                    console.log("ddlHall", this.state.ddlHall)
                })
            })
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }
    Get_Stall() {
        axios.get(SessionManager.API + "Get_Stall.php?")
            .then(result => {
                this.setState({
                    Get_Stall: result.data[0].data,
                    selectedUser: result.data[0].data
                }, () => {
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
        console.log("stall_name", val.Stall_name);
        this.toggle();
        this.setState({
            IsEdit: true,
            stall_name: val.Stall_name,
            edituserid: val.Stall_id,
            modal_hall: val.Hall_id
        })
    }

    editModalUser() {
        let obj = {
            stall_name: this.state.stall_name,
            edituserid: this.state.edituserid,
            hallid: this.state.modal_hall,
        }
        console.log("obj",obj);
        this.toggle();
        this.ModalclearAll();
        this.setState({
            IsEdit: false
        })
        axios.get(SessionManager.API + "EditStall.php?id=" + obj.edituserid + "&Stall_name=" + obj.stall_name+"&Hall_id="+obj.hallid)
            .then(result => {
                this.setState({
                    Get_Stall: result.data[0].data,
                    selectedUser: result.data[0].data
                }, () => {
                })
            })
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
        this.props.isEditUser(obj);
    }

    deleteUser(val) {
        console.log("val", val);
        axios.get(SessionManager.API + "DeleteStall.php?id=" + val.Stall_id)
            .then(result => {
                this.setState({
                    Get_Stall: result.data[0].data,
                    selectedUser: result.data[0].data
                }, () => {
                })
            })
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
        // this.props.isDeleteUser(val)
    }
    ModelRoleChange(event) {
        this.setState({ modal_hall: event.target.value });
    }
    ModelDepartmentChange(event) {
        this.setState({ modal_dapartment: event.target.value });
    }
    SearchRoleChange(event) {
        this.setState({ search_role: event.target.value });
    }
    SearchDepartmentChange(event) {
        console.log("Event ", event);
        this.setState({ search_hall: event.target.value });
    }

    AddUser() {
        let obj = {
            stall_name: this.state.stall_name,
            Hall_id: this.state.modal_hall,
            IsActive: 1,
            CreatedDate: new Date().getTime(),
            CreatedBy: SessionManager.Userdata[0].id,
            ModifiedDate: 0,
            ModifiedBy: 0
        }
        console.log("obj", obj);
        axios.get(SessionManager.API + "Add_Stall.php?Hall_id=" + obj.Hall_id + "&Stall_Name=" + obj.stall_name + "&CreatedDate=" + obj.CreatedDate + "&CreatedBy=" + obj.CreatedBy)
            .then(result => {
                console.log("Add result", result.data);
                this.setState({
                    Get_Stall: result.data[0].data,
                    selectedUser: result.data[0].data,
                }, () => {
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
            search_hall: 0,
            search_email: '',
            search_name: '',
            search_product: ''
        }, () => {
            this.Get_Stall();
            this.forceUpdate();
        })
    }
    ModalclearAll() {
        this.setState({
            modal_hall: 0,
            modal_dapartment: 0,
            stall_name: '',
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
            DepartmentId: this.state.search_hall,
            Product: this.state.search_product,
            FullName: this.state.search_name,
            Email: this.state.search_email
        }
        let record = this.state.Get_Stall.filter(a => a.Hall_id==this.state.search_hall ||a.Stall_name == this.state.search_product || a.FullName == this.state.search_name || a.Email == this.state.search_email)
        this.setState({
            selectedUser: record
        })
    }
    render() {
        let roles = [];
        let department = [];
        let setup_user = [];
        var ddlHall = [];
        if (this.state.ddlHall.length > 0) {
            ddlHall = this.state.ddlHall;
        }
        if (this.state.ddl.length > 0) {
            roles = this.state.ddl[0].data1
            department = this.state.ddl[0].data;

            // setup_user = this.state.Get_Stall[0].record;
        }
        // console.log("setup_user",setup_user);
        return (
            <div id="App">
                <div className="mt-4" style={{ width: '90%', margin: '0 auto' }}>
                    <div className="container-fluid bg-chart">
                        <p className="text-light pt-2 pb-2 font-weight-bold cent">Search</p>
                    </div>
                    <div className="container-fluid  bg-light">
                        <div className="row">
                            <div className="col-sm-12 " style={{ margin: '0 auto' }}>
                                <form style={{ marginTop: '40px' }}>
                                    <div className="form-group row mt-2">


                                        <div className="col-sm-3">
                                            <label for=" ">Stall Name</label>
                                            <input name="search_product" value={this.state.search_product} onChange={this.searchOnchange} type="text" className="form-control txt_SearchUserName " />
                                        </div>

                                        <div className="col-sm-3 d-inline-block">
                                            <label for=" ">Hall No</label>
                                            <select className="form-control txt_SearchUserName" value={this.state.search_hall} onChange={this.SearchDepartmentChange}>
                                                <option value={0}>--Select--</option>
                                                {ddlHall.length > 0 &&
                                                    (ddlHall.map((val, ind) => {
                                                        return (
                                                            <option key={ind} value={val.Hall_id}>{val.Hall_Name}</option>
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
                                        {/* <div className="col-sm-3 d-inline-block">
                                            <label for=" ">Department</label>
                                            <select className="form-control txt_SearchUserName" value={this.state.search_hall} onChange={this.SearchDepartmentChange}>
                                                <option value={0}>--Select--</option>
                                                {department.length > 0 &&
                                                    (department.map((val, ind) => {
                                                        return (
                                                            <option key={ind} value={val.Department_Id}>{val.DepartmentName}</option>
                                                        )
                                                    }))
                                                }
                                            </select>
                                        </div> */}
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
                    <div className="container-fluid bg-chart">
                        <p className="text-light pt-2 pb-2 font-weight-bold cent">Records</p>
                    </div>
                    <div className=" container-fluid bg-white">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wrapper wrapper-content animated fadeInUp">
                                    <div className="panel ">
                                        <div className="panel-body">
                                            <input type="button" data-toggle="modal" data-target="#CreateProjectModal" className="openmodal" style={{ display: 'none' }} />
                                            <button type="button" className="muModal btn btn-outline-success pull-right mb-2 pr-4 pl-4 cent btn_AddItem" onClick={() => { this.setState({ IsEdit: false }); this.toggle() }}><i className="fa fa-plus"></i>Add </button>
                                            <div className="project-list">
                                                <div className="table-responsive-sm">
                                                    <table className="table table-hover">
                                                        <thead className="bg-chart text-light">
                                                            <tr>
                                                                <th className="panel-th1">S.No</th>
                                                                <th className="panel-th2">Stall Name </th>
                                                                <th className="panel-th3">Hall Name </th>
                                                                <th className="panel-th3">User Name </th>
                                                                <th className="panel-th4">Email</th>
                                                                <th className="panel-th6">Action</th>
                                                            </tr>
                                                        </thead>
                                                        {this.state.Get_Stall.length > 0 &&
                                                            <tbody>
                                                                {(this.state.selectedUser.map((val, ind) => {

                                                                    return (
                                                                        <tr key={ind}>
                                                                            <td> {ind + 1} </td>
                                                                            <td className="project-title text-center">
                                                                                {val.Stall_name}
                                                                            </td>
                                                                            <td className="project-title text-center">
                                                                                {val.Hall_name}
                                                                            </td>
                                                                            <td className="project-title text-center">
                                                                                {val.FullName}
                                                                            </td>
                                                                            <td className="project-title text-center">
                                                                                {val.Email}
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
                                                <label for="exampleInputPassword2">Hall No </label>
                                                <span id="MainContent_RequiredFieldValidator5" style={{ color: 'Red', display: 'none' }}></span>
                                                <select className="form-control" value={this.state.modal_hall} onChange={this.ModelRoleChange}>
                                                    <option value={0}>--Select--</option>
                                                    {ddlHall.length > 0 &&
                                                        (ddlHall.map((val, ind) => {
                                                            console.log("val", val);
                                                            return (
                                                                <option key={ind} value={val.Hall_id}>{val.Hall_Name}</option>
                                                            )
                                                        }))
                                                    }
                                                </select>
                                            </div>
                                            {/* <div class="col-lg-12">
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
                                            </div> */}
                                            <label class="col-lg-12">Stall Name </label>
                                            <div class="col-lg-12">
                                                <input type="text" name="stall_name" value={this.state.stall_name} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
                                            </div>
                                            {/* <label class="col-lg-12">Email (Login-Id)</label>
                                            <div class="col-lg-12">
                                                <input type="email" name="email" value={this.state.email} onChange={this.AddOnChange} className="form-control txt_SearchEmail " /><span class="help-block m-b-none"></span>
                                            </div> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Setup_Stall);





