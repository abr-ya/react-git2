import {SHOW_ALERT, HIDE_ALERT} from './actionTypes';

export const hideAlert = () => dispatch({type: HIDE_ALERT});

export const showAlert = (text, type = 'secondary') => {
    dispatch({
        type: SHOW_ALERT,
        payload: {type, text},
    })
}
