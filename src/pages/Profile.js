import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Repos} from '../components/Repos/Repos';
import {User} from '../components/User/User';
import Loader from '../components/Loader/Loader';

const Profile = (props) => {
  const fromParamsName = useParams().name;

  // поверка перехода из навигации
  if (props.fromNav) {
    return (<p>Переход из навигации. Что дальше?..</p>)
  };

  // если мы здесь, а ничего не грузим - запросить!
  if (props.github.loading === undefined) {
    props.getUser(fromParamsName);
    props.getRepos(fromParamsName);
    return (<p>Здесь что-то происходит настолько быстро, что есть ли смысл в этом сообщении?</p>)
  }

  // репозитории не загружены или их нет
  const isReposEmpty = !props.github.repos[fromParamsName] || !props.github.repos[fromParamsName].length;

  // раньше здесь была проверка, но теперь она лишняя - просто основной вывод
  return (
    <>
      { props.github.user[fromParamsName]
        ? <h1>{props.github.user[fromParamsName].name} profile page</h1>
        : <h1>*имя пользователя* profile page</h1>
      }

      <Link to="/" className="btn btn-link">вернуться к результатам поиска</Link>

      {props.github.user[fromParamsName]
        ? (<User user={props.github.user[fromParamsName]} />)
        : (<Loader />)
      }

      {!isReposEmpty
        ? (<Repos repos={props.github.repos[fromParamsName]} />)
        : (<Loader />)
      }
    </>
  )    
};

export default Profile;
