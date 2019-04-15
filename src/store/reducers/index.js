import reducer from './reducer';
import Setup_UserReducer from './Setup_UserReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    root: reducer,
    Setup_UserReducer:Setup_UserReducer
});