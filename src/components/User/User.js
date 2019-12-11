import React, {Fragment} from 'react';
import Loader from '../Loader/Loader';

export const User = ({user}) => {
    // когда данные пользователя есть - покажем их!
    if (user) {
        const {name, company, avatar_url, location, bio, blog,
            login, html_url, followers, following, public_repos, public_gists
        } = user;

        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={avatar_url} alt={name} />
                            {location && <p>Место: {location}</p>}
                        </div>
                        <div className="col-sm-8">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url}
                                className="btn btn-dark"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Открыть профиль
                            </a>
        
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong> {login}
                                </li>}
                                {company && <li>
                                    <strong>Company: </strong> {company}
                                </li>}
                                {blog && <li>
                                    <strong>Blog: </strong> {blog}
                                </li>}
                            </ul>
        
                            <div className="badge badge-primary">
                                Подписчики: {followers}
                            </div>
                            <div className="badge badge-success">
                                Подписан(а): {following}
                            </div>
                            <div className="badge badge-info">
                                Репозитории: {public_repos}
                            </div>
                            <div className="badge badge-dark">
                                Gists: {public_gists}
                            </div>
                        </div>{// col-sm-8
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (<Loader />);
    }
}
