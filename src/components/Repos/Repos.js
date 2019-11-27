import React, {Fragment} from 'react';

export const Repos = (props) => {
    const {repos, name} = props;

    // когда репозитории пользователя есть - покажем их!
    if (repos[name]) {
        return (
            <Fragment>
                {repos[name].map(repo => (
                    <div className="card mb-3" key={repo.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h5>
                        </div> 
                    </div>
                ))}
            </Fragment>
        )
    } else {
        return ('Здесь должен быть лоадер!..');
    }
}
