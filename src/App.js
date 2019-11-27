import React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Nav} from './components/Nav/Nav';
import {Alert} from './components/Alert/Alert';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Profile} from './pages/Profile';

import {GithubState} from './context/github/GithubState';


const App = (props) => {
  const {
    counter,
    alert,
    github,
    add,
    addNum,
    showAlert,
    hideAlert,
    getUsers,
    clearUsers,
    getUser,
    getRepos,
  } = props;

  return (
    <GithubState>
        <BrowserRouter>
          <div className="container">
            <Nav />
          </div>
          <div className="container App pt-4">
            { alert.display
                ? <Alert alert={alert} hideAlert={hideAlert} />
                : null
            }
            
            <Switch>
              <Route path="/" exact component={() => (<Home github={github} getUser={getUser} />)} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={(match) => (
                <Profile github={github} getUser={getUser} getRepos={getRepos} match={match} />
              )} />
              <Redirect to="/" />
            </Switch>
          </div>

          <div className="App-old">
            <h1>тестируем тут: {counter}</h1>

            <hr/>

            <div className="Actions">
              <button onClick={add}>Добавить 1</button>
              <button onClick={() => {addNum(10)}}>Добавить 10</button>

              <button onClick={() => {showAlert('Текст сообщения!', 'success')}}>Показать</button>
              <button onClick={hideAlert}>Скрыть</button>

              <button onClick={() => {getUsers('dan')}}>Получить пользователей</button>

              { github.loading
                  ? 'загрузка'
                  : 'пользователи готовы!'
              }

              <button onClick={clearUsers}>Почистить</button>

              <button onClick={() => {getUser('fff')}}>Получить пользователя</button>
              <button onClick={() => {getRepos('fff')}}>Получить репозитории</button>
            </div>             
          </div>
          

        </BrowserRouter>
    </GithubState>

            
  )
}

export default App;
