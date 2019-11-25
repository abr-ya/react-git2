import {GET_USERS} from './actionTypes';
import axios from 'axios';

//создание и тест переменных окружения
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SC = process.env.REACT_APP_CLIENT_SECRET;
console.log(CLIENT_ID);

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SC}`;
}

// для работы асинхронного экшена нужны thunk + вложенный dispatch!))
export const getUsers = name => {
    return async (dispatch) => {
        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${name}&`)
        ); 
        console.log(response.data.items);
        dispatch ({
            type: GET_USERS,
            users: response.data.items,
            loading: false,
        })        
    }

}
