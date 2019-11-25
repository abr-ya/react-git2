import React, {Fragment, useContext, useEffect} from 'react';
import {GithubContext} from '../context/github/githubContext';
import {Link} from 'react-router-dom';
import {Repos} from '../components/Repos/Repos';

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    // после отрисовки
    // эффект и список зависимостей, пустой массив - выполнится один раз
    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
        // чтобы не было варнинга на пустой массив!
        // eslint-disable-next-line    
    }, []);

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    //console.log(match)

    //"развернём" юзера
    const {name, company, avatar_url, location, bio, blog,
        login, html_url, followers, following,
        public_repos, public_gists
    } = user;

    return (
        <Fragment>
            <h1>{name} profile page</h1>
            <Link to="/" className="btn btn-link">вернуться к результатам поиска</Link>

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

            <Repos repos={repos} />
        </Fragment>
    )
}
