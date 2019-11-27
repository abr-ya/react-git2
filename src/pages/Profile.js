import React, {Fragment} from 'react';
// import {GithubContext} from '../context/github/githubContext';
import {Link} from 'react-router-dom';
// import {Repos} from '../components/Repos/Repos';
import {User} from '../components/User/User';

export const Profile = (props) => {
    //const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    //console.log(props);
    const urlName = props.match.match.params.name;

    //
    console.log(props.github.loading);
    if (props.github.loading === undefined) {
        return <p className="text-center">Что-то пошло не так!.. Совсем...</p>
    }

    // грузится или загрузилось?
    if (props.github.loading) {
        return <p className="text-center">Загрузка...</p>
    } else {
        const user = props.github.user[urlName];
        return (
            <Fragment>
                <h1>{user.name} profile page</h1>
                <Link to="/" className="btn btn-link">вернуться к результатам поиска</Link>

                <User user={user} />

                {/* <Repos repos={repos} /> */}
            </Fragment>
        )
    }
    
}
