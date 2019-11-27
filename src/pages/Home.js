import React from 'react';
import Search from '../containers/searchContainer';
import {Card} from '../components/Card/Card';
//import {GithubContext} from '../context/github/githubContext';


export const Home = (props) => {
    console.log(props.github);
    //const {loading, users} = useContext(GithubContext);
    const {loading, users} = props.github;

    console.log(users.length);

    return (
        <div>
            <h1>Поиск по пользователям GitHub</h1>

            <Search />

            <div className="row">
                {loading
                    ? <p className="text-center">Загрузка...</p>
                    :   users.map(user => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={user.id} onClick={() => props.getUser(user.login)}>
                            <Card user={user} />
                        </div>   
                    ))
                }
            </div>
        </div>
    )
}
