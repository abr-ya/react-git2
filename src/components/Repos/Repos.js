import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import Pagination from '../Pagination/Pagination';
import ReposOnePage from '../ReposOnePage/ReposOnePage';
import st from './repos.module.scss';

export const Repos = ({repos}) => {
  const [active, setActive] = useState(1);
  const [pages, setPages] = useState(1);
  const [userRepos, setUserRepos] = useState(repos);
  const [pageRepos, setPageRepos] = useState([]);
  
  const [sorting, setSorting] = useState(null);

  const sortingOptions = [
    { value: ['stargazers_count', 'desc'], label: 'sort By Stars' },
    { value: ['name', 'asc'], label: 'sort By Name Up' },
    { value: ['name', 'desc'], label: 'sort By Name Down' },
    { value: ['name', 'str_asc'], label: 'sort By Name Up (IgnoreCase)' },
    { value: ['name', 'str_desc'], label: 'sort By Name Down (IgnoreCase)' },
  ];

  const sortingHandler = (selectedOption) => {
    setSorting(selectedOption);
    console.log(`Option selected:`, selectedOption.value);
    sortHandler(...selectedOption.value);
  };

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
    // eslint-disable-next-line array-callback-return
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

  // сортировка, code - признак, order - порядок
  const sortHandler = (code, order) => {
    sortBy(userRepos, code, order);
    setUserRepos(userRepos);
    setPageRepos(preparePage(userRepos, 10, active).pageRepos);
  }

  const sortByStars = () => sortHandler('stargazers_count', 'desc');
  const sortByNameUp = () => sortHandler('name');
  const sortByNameDown = () => sortHandler('name', 'desc');
  const sortByNameUpIgnoreCase = () => sortHandler('name', 'str_asc');
  const sortByNameDownIgnoreCase = () => sortHandler('name', 'str_desc');

  // когда репозитории пользователя есть - покажем их!
  return (
    userRepos ? (
      <>
        <div className={`badge badge-info ${st.reposBadge}`} onClick={sortByStars}>sortByStars</div>
        <div className={`badge badge-primary ${st.reposBadge}`} onClick={sortByNameUp}>sortByName Up</div>
        <div className={`badge badge-primary ${st.reposBadge}`} onClick={sortByNameDown}>sortByName Down</div>
        <div className={`badge badge-info ${st.reposBadge}`} onClick={sortByNameUpIgnoreCase}>sortByName Up ignoreCase</div>
        <div className={`badge badge-info ${st.reposBadge}`} onClick={sortByNameDownIgnoreCase}>sortByName Down ignoreCase</div>
        <Pagination active={active} pages={pages} setActive={setActive} />
        <Select
          className={st.select}
          placeholder={'сортировать...'}
          value={sorting}
          onChange={sortingHandler}
          options={sortingOptions}
        />
        <ReposOnePage pageRepos={pageRepos} />
      </>
    ) : (
      "Что-то пошло не так: здесь должны быть репозитории, но их нет."
    )
  )
};
