import React, {Fragment} from 'react';

export const Repos = ({repos, urlName}) => {
    // когда репозитории пользователя есть - покажем их!
    if (repos[urlName]) {
        return (
            <Fragment>
                {repos[urlName].map(repo => (
                    <div className="card mb-3" key={repo.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h5>
                            {repo.language && <p>language: {repo.language}</p>}
                            <p>stars: {repo.stargazers_count}</p>
                            <p>forks: {repo.forks_count}</p>
                        </div> 
                    </div>
                ))}
            </Fragment>
        )
    } else {
        return (<p>Грузятся репозитории пользователя!..</p>);
    }
}
