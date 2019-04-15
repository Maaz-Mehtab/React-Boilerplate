import axios from 'axios';
import history from '../../History';

export function Login_user(obj) {
    console.log("CCC",obj);
    return dispatch => {
        axios.post("/api/Login_apis/Login_user", obj)
            .then(res => {
                console.log("res",res)
                localStorage.setItem("users", JSON.stringify(res.data.isLogin))
                dispatch({
                    type: "LOGIN_USER",
                    payload1: res.data.data,
                    payload2:res.data.data2
                })
                history.push('/');
                // window.location.href="/";
               
            }

            )
    }
}

