import {GET_TOP_JS, GET_USERS, CLEAR_USERS, GET_USER, GET_REPOS, SET_LOADING} from './actionTypes';
import axios from 'axios';

//создание и тест переменных окружения
// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const CLIENT_SC = process.env.REACT_APP_CLIENT_SECRET;

// добавляем ключ API
// временно убрал ключи апи - нужны ли они?!
const withCreds = url => {
  // return `&${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SC}`;
  return `${url}`;
}

// для работы асинхронного экшена нужны thunk + вложенный dispatch!))

// 10 самых-самых JS
export const getTopJS = () => {
  return async (dispatch) => {
    dispatch({type: SET_LOADING}) // лоадер
    const response = await axios.get(
      withCreds('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10')
    );
    if (response.data) {
      console.log(response.data.items);
      dispatch ({type: GET_TOP_JS, payload: response.data.items}); 
    } else {
      console.log('error!');
    }
  }
};

// получаем пользователей по запросу
export const getUsers = name => {
  return async (dispatch) => {
    dispatch({type: SET_LOADING}) // лоадер
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${name}`)
    );
    dispatch ({type: GET_USERS, payload: response.data.items});   
  }
};

// чистим пользователей
export const clearUsers = () => ({type: CLEAR_USERS});

// получаем пользователя
export const getUser = name => {
  return async (dispatch) => {
    dispatch({type: SET_LOADING}) // лоадер
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}?`)
    );
    dispatch({type: GET_USER, payload: response.data, name});
  } 
};

// получаем репозитории пользователя
export const getRepos = name => {
  return async (dispatch) => {
    dispatch({type: SET_LOADING}) // лоадер
    // per_page=11& - для пагинации в запросе - она ушла на фронт
    let needGet = true;
    const userRepos = [];
    let pageCounter = 1;
    while (needGet) {
      const response = await axios.get(
        withCreds(`https://api.github.com/users/${name}/repos?page=${pageCounter}`)
      );
      //console.log(response.data.length);
      userRepos.push(...response.data);
      pageCounter ++;
      if (!response.data.length) needGet = false;
    }
    //console.log(userRepos);
 
    dispatch({
      type: GET_REPOS,
      payload: userRepos,
      name,
    })     
  }    
};
