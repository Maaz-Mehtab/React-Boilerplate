// import uuid from 'uuid';
const INITIAL_STATE = {
    setup_user: '',
    roles: '',
    department: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUP_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,

            }
        case "ADD_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,

            }
        case "EDIT_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,

            }
        case "DELETE_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,

            }
        case "SEARCH_USER":
            return {
                setup_user: action.payload0,
                roles: action.payload1,
                department: action.payload2,
                record:action.payload3
            }

        default:
            return state;
    }

}