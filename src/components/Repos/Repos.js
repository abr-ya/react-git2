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
        setPageRepos(preparePage(repos, 10, active).pageRepos);
        setPages(preparePage(repos, 10, active).pages);
    }, [repos, active]);

    // сортировка по звёздам - варианты в txt - это старая
    const sortBy = (arr, code, order='asc') => {
        // eslint-disable-next-line
        arr.sort((a, b) => {
            // простая по-возростанию
            if (order === 'asc') {
                return (a[code] > b[code]) - (b[code] > a[code]);
            // простая по-убыванию    
            } else if (order === 'desc') {    
                return (a[code] < b[code]) - (b[code] < a[code]);
            // без учета регистра по возрастанию
            } else if (order === 'str_asc') {
                return (a[code].toLowerCase() > b[code].toLowerCase()) - (b[code].toLowerCase() > a[code].toLowerCase());
            // без учета регистра по убыванию
            } else if (order === 'str_desc') {
                return (a[code].toLowerCase() < b[code].toLowerCase()) - (b[code].toLowerCase() < a[code].toLowerCase());
            }
        });
    }

    const sortHandler = (code, order) => {
        sortBy(userRepos, code, order);
        setUserRepos(userRepos);
        setPageRepos(preparePage(userRepos, 10, active).pageRepos);
    }

    // когда репозитории пользователя есть - покажем их!
    return (
        userRepos ? (
            <Fragment>
                <div className="badge badge-info repos-badge" onClick={() => sortHandler('stargazers_count', 'desc')}>sortByStars</div>
                <div className="badge badge-primary repos-badge" onClick={() => sortHandler('name')}>sortByName Up</div>
                <div className="badge badge-primary repos-badge" onClick={() => sortHandler('name', 'desc')}>sortByName Down</div>
                <div className="badge badge-info repos-badge" onClick={() => sortHandler('name', 'str_asc')}>sortByName Up ignoreCase</div>
                <div className="badge badge-info repos-badge" onClick={() => sortHandler('name', 'str_desc')}>sortByName Down ignoreCase</div>
                <Pagination active={active} pages={pages} setActive={setActive} />
                <ReposOnePage pageRepos={pageRepos} />
            </Fragment>
        ) : (
            "Что-то пошло не так: здесь должны быть репозитории, но их нет."
        )
    )
}
