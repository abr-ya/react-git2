import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Repos} from '../components/Repos/Repos';
import {User} from '../components/User/User';

export const Profile = (props) => {
    const urlName = props.match.match.params.name;

    // если мы тут случайно, или глюк, или - хорошо бы запросить данные!
    if (props.github.loading === undefined) {
        return (
            <Fragment>
                <p className="text-center">Что-то пошло не так!.. Совсем...</p>
            </Fragment>
        )
    }

    // грузится или загрузилось?
    if (props.github.loading) {
        return (<p className="text-center">Загрузка...</p>)
    } else {
        const user = props.github.user[urlName];
        return (
            <Fragment>
                <h1>{user.name} profile page</h1>
                <Link to="/" className="btn btn-link">вернуться к результатам поиска</Link>

                <User user={user} />

                <Repos repos={props.github.repos} name={user.login} />
            </Fragment>
        )
    } 
}
