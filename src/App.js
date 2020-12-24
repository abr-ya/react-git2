import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import {About, Home, Profile, Sandbox} from './pages/';
import './app.scss';

const App = ({alert, github, hideAlert, getTopJS, getUser, getRepos}) => {
  useEffect(() => {
    getTopJS();
  }, [getTopJS]);

  return (
    <BrowserRouter basename="/">
      <div className="container">
        <Nav />
      </div>
      <div className="container App pt-4">
        <Switch>
          <Route path="/" exact component={() => (
            <Home
              alert={alert}
              github={github}
              getTopJS={getTopJS}
              getUser={getUser}
              getRepos={getRepos}
              hideAlert={hideAlert}
            />
          )} />
          <Route path="/about" component={About} />
          <Route path="/sandbox" component={Sandbox} />
          <Route path="/profile/:name" component={(match) => (
            <Profile github={github} getUser={getUser} getRepos={getRepos} />
          )} />
          <Route path="/profile/" component={() => (<Profile fromNav />)} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>          
  );
};




export default App;
