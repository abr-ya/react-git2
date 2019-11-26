import React, {useState} from 'react';
import './Search.scss';
//import {GithubContext} from '../../context/github/githubContext';

export const Search = (props) => {
    // берем из свойств, которые из контейнера
    const {
        showAlert,
        hideAlert,
        getUsers,
        clearUsers,
    } = props;

    const [value, setValue] = useState('');
    
    //const github = useContext(GithubContext);

    const onSubmit = (event) => {
        // если нажат не Enter - делаем ничего!))
        if (event.key !== 'Enter') {
            return 
        }

        // чистим результат прошлого запроса
        //github.clearUsers();
        clearUsers();

        // если есть запрос
        if (value.trim()) {
            hideAlert();
            //github.search(value.trim());
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
