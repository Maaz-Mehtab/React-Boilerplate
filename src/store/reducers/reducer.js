// import uuid from 'uuid';
const INITIAL_STATE = {
    current_user: '',
    current_user_role:'',
    loading: false,
    list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                current_user: action.payload1,
                current_user_role: action.payload2,
                loading: false
            }
        default:
            return state;
    }

}