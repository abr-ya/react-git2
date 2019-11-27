import {combineReducers} from 'redux';
import alertReducer from './alertReducer';
import githubReducer from './githubReducer';

export default combineReducers({
    alert: alertReducer,
    github: githubReducer,
})
