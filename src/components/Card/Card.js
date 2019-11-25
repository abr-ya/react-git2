import React from 'react';
import './Card.scss';
import {Link} from 'react-router-dom';


export const Card = ({user}) => {
    //console.log(user);
    return (
        <div className="card">
            <div className="card-body">
                <Link to={"/profile/" + user.login}>
                    <img src={user.avatar_url} alt={user.login} className="card-img-top" />
                </Link>
                <Link to={"/profile/" + user.login}>
                    <h5 className="card-title">{user.login}</h5>
                </Link>
                <Link to={"/profile/" + user.login} className="btn btn-primary">
                    Подробнее
                </Link>
            </div>   
        </div>
    )
}
