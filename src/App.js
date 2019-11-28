import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Nav} from './components/Nav/Nav';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Profile} from './pages/Profile';

const App = (props) => {
  const {
    alert,
    github,
    hideAlert,
    getUser,
    getRepos,
  } = props;

  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
      </div>
      <div className="container App pt-4">
        <Switch>
          <Route path="/" exact component={() => (
            <Home alert={alert} github={github} getUser={getUser} getRepos={getRepos} hideAlert={hideAlert}/>
          )} />
          <Route path="/about" component={About} />
          <Route path="/profile/:name" component={(match) => (
            <Profile github={github} getUser={getUser} getRepos={getRepos} match={match} />
          )} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>          
  )
}

export default App;
