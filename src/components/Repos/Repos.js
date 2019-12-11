import React, {Fragment, useState, useEffect} from 'react';
import Pagination from '../Pagination/Pagination';
import ReposOnePage from '../ReposOnePage/ReposOnePage';
import './Repos.scss';

export const Repos = ({repos}) => {
    const [active, setActive] = useState(1);
    const [pages, setPages] = useState(1);
    const [userRepos, setUserRepos] = useState(repos);
    const [pageRepos, setPageRepos] = useState([]);    

    // подготовка страницы при пагинации
    const preparePage = (userRepos, onPage, active) => {
        const pages = Math.ceil(userRepos.length / onPage); // кол-во страниц
        const pageRepos = userRepos.slice((active - 1) * onPage, active * onPage); // второй без -1, т.к. slice не включает
        return ({
            pageRepos,
            pages,
        })
    }

    useEffect(() => {
        setPageRepos(preparePage(repos, 5, active).pageRepos);
        setPages(preparePage(repos, 5, active).pages);
    }, [repos, active]);

    // сортировка по звёздам - варианты в txt - это старая
    const sortByStars = (arr) => {
        arr.sort((a, b) => {
            return (a.stargazers_count < b.stargazers_count) - (b.stargazers_count < a.stargazers_count);
        });
    }

    const sortHandler = () => {
        sortByStars(userRepos);
        setUserRepos(userRepos);
        setPageRepos(preparePage(userRepos, 5, active).pageRepos);
    }

    // когда репозитории пользователя есть - покажем их!
    return (
        userRepos ? (
            <Fragment>
                <div className="badge badge-info repos-badge" onClick={sortHandler}>sortByStars</div>
                <Pagination active={active} pages={pages} setActive={setActive} />
                <ReposOnePage pageRepos={pageRepos} />
            </Fragment>
        ) : (
            "Что-то пошло не так: здесь должны быть репозитории, но их нет."
        )
    )
}
