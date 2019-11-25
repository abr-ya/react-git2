import {GET_USERS} from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: true,
}

export default function githubReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users,
                loading: action.loading,
            }
        default:
            return state;
    }
}
