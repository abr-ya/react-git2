import {GET_USERS, CLEAR_USERS, GET_USER, GET_REPOS, SET_LOADING} from './actionTypes';
import axios from 'axios';

//создание и тест переменных окружения
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SC = process.env.REACT_APP_CLIENT_SECRET;
console.log(CLIENT_ID);

// добавляем ключ API
const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SC}`;
}

// для работы асинхронного экшена нужны thunk + вложенный dispatch!))
// получаем пользователей по запросу
export const getUsers = name => {
    return async (dispatch) => {
        dispatch({type: SET_LOADING}) // лоадер
        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${name}&`)
        ); 
        //console.log(response.data.items);
        dispatch ({
            type: GET_USERS,
            payload: response.data.items,
        })        
    }
}

// чистим пользователей
export const clearUsers = () => ({
    type: CLEAR_USERS
});

// получаем пользователя
export const getUser = name => {
    return async (dispatch) => {
        dispatch({type: SET_LOADING}) // лоадер
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        ); 

        //console.log(response.data);
        dispatch({
            type: GET_USER,
            payload: response.data,
            name,
        }) 
    }   
}

// получаем репозитории пользователя
export const getRepos = name => {
    return async (dispatch) => {
        dispatch({type: SET_LOADING}) // лоадер
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=10&`)
        ); 

        //console.log(response.data);
        dispatch({
            type: GET_REPOS,
            payload: response.data
        })         
    }        
}
