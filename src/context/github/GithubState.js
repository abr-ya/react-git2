import React, {useReducer} from 'react';
import axios from 'axios';
import {GithubContext} from './githubContext';
import {githubReducer} from './githubReducer';
import {SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING} from '../types';


//создание и тест переменных окружения
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SC = process.env.REACT_APP_CLIENT_SECRET;
console.log(CLIENT_ID);

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SC}`;
}

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // поиск пользователей
    const search = async value => {
        setLoading();
        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        );        

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    // получаем пользователя
    const getUser = async name => {
        setLoading();
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}?`)
        ); 

        dispatch({
            type: GET_USER,
            payload: response.data
        })        
    }

    // получаем репозитории
    const getRepos = async name => {
        setLoading();
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
        ); 

        dispatch({
            type: GET_REPOS,
            payload: response.data
        })        
    }

    // чистим пользователей
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    // включение лоадинга
    const setLoading = () => dispatch({type: SET_LOADING})

    const {user, users, repos, loading} = state;

    return (
        <GithubContext.Provider value={{
            setLoading, search, getRepos, getUser, clearUsers, // предоставляем эти методы
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}
