import React, {useReducer} from 'react';
import {AlertContext} from './alertContext';
import {alertReducer} from './alertReducer';
import {HIDE_ALERT, SHOW_ALERT} from '../types';

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null);

    const hideAlert = () => dispatch({type: HIDE_ALERT});

    const showAlert = (text, type = 'secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }

    return (
        <AlertContext.Provider value={{
            hideAlert, showAlert, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}
