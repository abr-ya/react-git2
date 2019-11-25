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
    add,
    addNum,
    counter,
    showAlert,
    hideAlert,
    alert,
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
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
              <Redirect to="/" />
            </Switch>
          </div>

          <div className="App-old">
            <h1>Управляем числом: {counter}</h1>

            <hr/>

            <div className="Actions">
              <button onClick={add}>Добавить 1</button>
              <button onClick={() => {addNum(10)}}>Добавить 10</button>
              <button onClick={() => {showAlert('Текст сообщения!', 'success')}}>Показать</button>
              <button onClick={hideAlert}>Скрыть</button>
            </div>             
          </div>
          

        </BrowserRouter>
    </GithubState>

            
  )
}

export default App;