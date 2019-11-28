import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Repos} from '../components/Repos/Repos';
import {User} from '../components/User/User';

export const Profile = (props) => {
    const urlName = props.match.match.params.name;

    // если мы здесь, а ничего не грузим - запросить!
    if (props.github.loading === undefined) {
        props.getUser(urlName);
        props.getRepos(urlName);
        return (<p>Здесь что-то происходит настолько быстро, что есть ли смысл в этом сообщении?</p>)
    }

    // раньше здесь была проверка, но теперь она лишняя - просто основной вывод
    return (
        <Fragment>
            { props.github.user[urlName]
                ? <h1>{props.github.user[urlName].name} profile page</h1>
                : <h1>*имя пользователя* profile page</h1>
            }

            <Link to="/" className="btn btn-link">вернуться к результатам поиска</Link>

            <User user={props.github.user} urlName={urlName} />

            <Repos repos={props.github.repos} urlName={urlName} />
        </Fragment>
    )        
}
