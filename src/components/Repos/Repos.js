import React, {Fragment, useState} from 'react';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

function sortByStars(arr) {
    arr.sort((a, b) => {
        return (a.stargazers_count < b.stargazers_count) - (b.stargazers_count < a.stargazers_count);
    });
}

export const Repos = ({repos, urlName}) => {
    const [active, setActive] = useState(1);
    const [reposUser, setRepos] = useState(repos[urlName]);
    // когда репозитории пользователя есть - покажем их!
    if (reposUser) {
        console.log(reposUser);
        //sortByStars(reposUser)
        //console.log(reposUser);

        const onPage = 5;
        const pages = Math.ceil(repos[urlName].length / onPage);
        const start = (active - 1) * onPage;
        const stop = active * onPage; // без -1, т.к. slice не включает
        const pageRepos = reposUser.slice(start, stop);
        //console.log(currentRepos);
        return (
            <Fragment>
                <div className="badge badge-info" onClick={() => {sortByStars(reposUser); setRepos(reposUser)}}>sortByStars</div>
                <Pagination active={active} pages={pages} setActive={setActive} />            
                {pageRepos.map(repo => (
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
