import React, {Fragment} from 'react';
import './ReposOnePage.scss';

const ReposOnePage = ({pageRepos}) => {

    return (
        <Fragment>
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
}

export default ReposOnePage;
