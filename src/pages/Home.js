import React, {useContext} from 'react';
import {Search} from '../components/Search/Search';
import {Card} from '../components/Card/Card';
import {GithubContext} from '../context/github/githubContext';


export const Home = () => {
    const {loading, users} = useContext(GithubContext)

    return (
        <div>
            <h1>Поиск по пользователям GitHub</h1>

            <Search />

            <div className="row">
                {loading
                    ? <p className="text-center">Загрузка...</p>
                    :   users.map(user => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={user.id}>
                            <Card user={user} />
                        </div>   
                    ))
                }
            </div>
        </div>
    )
}
