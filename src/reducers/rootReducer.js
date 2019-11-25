import {combineReducers} from 'redux';
import countReducer from './countReducer';
import alertReducer from './alertReducer';
import githubReducer from './githubReducer';


export default combineReducers({
    count: countReducer,
    alert: alertReducer,
    github: githubReducer,
})
