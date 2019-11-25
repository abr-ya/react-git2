import React, {useContext} from 'react';
import './Alert.scss';
import {AlertContext} from '../../context/alert/alertContext';

// ничего не принимаем в параметрах - работаем с контекстом
export const Alert = () => {
    const {alert, hideAlert} = useContext(AlertContext)

    if (!alert) return null;

    return (
        <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hideAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
