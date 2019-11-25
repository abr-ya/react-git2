import {SHOW_ALERT, HIDE_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

// старый вариант редюсера - со свичом:
// switch (action.type) {
//     case SHOW_ALERT:
//         return state
//     case HIDE_ALERT:
//         return state
//     default: return state
// }
