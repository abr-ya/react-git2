import {GET_USERS, CLEAR_USERS, GET_USER, GET_REPOS, SET_LOADING} from '../actions/actionTypes';

const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: undefined,
}

export default function githubReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
            }
        case GET_USER:
            return {
                ...state,
                //user: action.payload,
                user: {
                    ...state.user,
                    [action.name]: action.payload,
                },
                loading: false,
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}
