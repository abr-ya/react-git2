import React, {Fragment, useState} from 'react';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

export const Repos = ({repos, urlName}) => {
    const [active, setActive] = useState(1);
    // когда репозитории пользователя есть - покажем их!
    if (repos[urlName]) {
        const onPage = 5;
        const pages = Math.ceil(repos[urlName].length / onPage);
        const start = (active - 1) * onPage;
        const stop = active * onPage; // без -1, т.к. slice не включает
        const currentRepos = repos[urlName].slice(start, stop);
        //console.log(currentRepos);
        return (
            <Fragment>
                <Pagination active={active} pages={pages} setActive={setActive} />            
                {currentRepos.map(repo => (
                    <div className="card mb-3" key={repo.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h5>
                            {repo.language &&
                                <div className="badge badge-primary">
                                    Язык: {repo.language}
                                </div>                                
                            }
                            <div className="badge badge-success">
                                stars: {repo.stargazers_count}
                            </div>
                            <div className="badge badge-info">
                                forks: {repo.forks_count}
                            </div>
                        </div> 
                    </div>
                ))}
            </Fragment>
        )
    } else {
        return (<Loader />);
    }
}
