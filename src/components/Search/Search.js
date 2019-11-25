import React, {useContext, useState} from 'react';
import './Search.scss';
import {AlertContext} from '../../context/alert/alertContext';
import {GithubContext} from '../../context/github/githubContext';

export const Search = () => {
    const [value, setValue] = useState('');

    const {showAlert, hideAlert} = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (event) => {
        // если нажат не Enter - делаем ничего!))
        if (event.key !== 'Enter') {
            return 
        }

        // чистим результат прошлого запроса
        github.clearUsers();

        // если есть запрос
        if (value.trim()) {
            hideAlert();
            github.search(value.trim());
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
