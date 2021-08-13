import {SET_STATE} from "../type/newsType";

export const setState = (data) => {
    return {
        type: SET_STATE,
        payload: data
    }
};

