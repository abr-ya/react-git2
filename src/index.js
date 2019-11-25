import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/appContainer';
import {register} from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

// подключаю devtools и thunk как в react-quiz3 (был простой способ включения devtools)
// необходимо установить расширение браузера: https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);


// оборачиваем App в Provider, передаём Store
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
register();
