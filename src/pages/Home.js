import React from 'react';
import Search from '../containers/searchContainer';
import Card from '../components/Card/Card';


export const Home = (props) => {
    //console.log(props.github);
    const {loading, users} = props.github;

    const userClickHandler = (user) => {
        props.getUser(user);
        props.getRepos(user);
    }

    return (
        <div>
            <h1>Поиск по пользователям GitHub</h1>

            {/*В поиск функции передаём с помощью контейнера.*/}
            <Search />

            <div className="row">
                {loading
                    ?   <div className="col"><p className="text-center">Здесь должен быть лоадер!..</p></div>
                    :   users.map(user => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={user.id} onClick={() => userClickHandler(user.login)}>
                            <Card user={user} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
