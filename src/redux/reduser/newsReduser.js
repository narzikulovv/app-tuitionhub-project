import {SET_STATE} from "../type/newsType";

const initialState = {
    open: false
};

export const newsReduser = (state = initialState, action) => {
    if (action.type === SET_STATE) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state
};