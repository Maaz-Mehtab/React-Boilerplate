import axios from 'axios';
import history from '../../History';

export function SetupUser() {
    return dispatch => {
        axios.get("/api/SetupUser_apis/Setup_User")
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "SETUP_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2
                })
            }
            )
    }
}
export function AddUser(obj) {
    return dispatch => {
        axios.post("/api/SetupUser_apis/AddUser", obj)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "ADD_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2
                })
            }
            )
    }
}
export function EditUser(obj) {
    return dispatch => {
        axios.put(`/api/SetupUser_apis/EditUser`, obj)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "EDIT_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2
                })
            }
            )
    }
}
export function DeleteUser(obj) {
    return dispatch => {
        console.log("obj", obj);
        axios.put(`/api/SetupUser_apis/DeleteUser`, obj)
            .then(res => {
                console.log("res", res)
                dispatch({
                    type: "DELETE_USER",
                    payload0: res.data.data0,
                    payload1: res.data.data1,
                    payload2: res.data.data2
                })
            }
            )
    }
}
export function SearchUser(obj, data,roles,department) {
    return dispatch => {
        console.log("obj", obj);
        console.log("data", data);
        let record = data.filter(a => a.RoleId == obj.RoleId )
        console.log("record", record);
        dispatch({
            type: "SEARCH_USER",
            payload0: data,
            payload1: roles,
            payload2: department,
            payload3:record

        })
    }


}

