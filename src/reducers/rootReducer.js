import {combineReducers} from 'redux';
import countReducer from './countReducer';
import alertReducer from './alertReducer';


export default combineReducers({
    count: countReducer,
    alert: alertReducer,
})
