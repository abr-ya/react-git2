import React from 'react';
import Search from '../containers/searchContainer';
import Card from '../components/Card/Card';
import Alert from '../components/Alert/Alert';
import Loader from '../components/Loader/Loader';

const Home = ({github, alert, hideAlert, getUser, getRepos}) => {
  const {loading, users, topJS} = github;

  const userClickHandler = (user) => {
    getUser(user);
    getRepos(user);
  };

  return (
    <div>
      <h1>Поиск по пользователям GitHub</h1>

      { alert.display
        ? <Alert alert={alert} hideAlert={hideAlert} />
        : null
      }

      {/*В поиск функции передаём с помощью контейнера.*/}
      <Search />

      <div className="row">
        {loading
          ? <div className="col"><Loader /></div>
          : Array.isArray(users) && users.length
            ? users.map(user => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={user.id}
                onClick={() => userClickHandler(user.login)}
              >
                <Card user={user} />
              </div>
            ))
            : <div className="col-lg">
                ... пользователи не найдены! Или пока не запрошены. Зато мы знаем топ-10 репозиториев на JavaScript!))
                <ol>
                {topJS.map(repo => (
                  <li key={repo.id}>{`${repo.name} - ${repo.stargazers_count} stars`}</li>
                ))}
                </ol>
              </div>
        }
      </div>
    </div>
  )
};

export default Home;
