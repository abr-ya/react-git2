import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Nav} from './components/Nav/Nav';
import {Alert} from './components/Alert/Alert';
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
        { alert.display
            ? <Alert alert={alert} hideAlert={hideAlert} />
            : null
        }
        
        <Switch>
          <Route path="/" exact component={() => (<Home github={github} getUser={getUser} getRepos={getRepos} />)} />
          <Route path="/about" component={About} />
          <Route path="/profile/:name" component={(match) => (
            <Profile github={github} getUser={getUser} match={match} />
          )} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>          
  )
}

export default App;
