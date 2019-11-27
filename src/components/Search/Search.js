import React, {useState} from 'react';
import './Search.scss';

export const Search = (props) => {
    // берем из свойств, которые из контейнера
    const {
        showAlert,
        hideAlert,
        getUsers,
        clearUsers,
    } = props;

    // для текущего значения используем State
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        // если нажат не Enter - делаем ничего!))
        if (event.key !== 'Enter') {
            return 
        }

        // чистим результат прошлого запроса
        clearUsers();

        // если есть запрос
        if (value.trim()) {
            hideAlert();
            showAlert(`Результат поиска по запросу ${value.trim()}.`, 'success');
            getUsers(value.trim());
        } else {
            showAlert('Введите данные для поиска!', 'danger');
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник или его часть для поиска"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}
