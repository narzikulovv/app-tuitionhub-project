
import {combineReducers} from "redux";
import {newsReduser} from "./newsReduser";

export const rootReduser = combineReducers({
    news: newsReduser
});