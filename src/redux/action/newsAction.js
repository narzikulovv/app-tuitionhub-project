import { toast } from "react-toastify";

import Api from "../api/newsApi";
import {
  FETCH_NEWS,
  FETCH_NEWS_ERROR,
  FETCH_NEWS_SUCCESS,
  OFF_LOADING,
  ON_LOADING,
} from "../type/newsType";

export const addNews = (body) => async (dispatch) => {
  try {
    dispatch({ type: ON_LOADING });
    await Api.addNews(body);
    dispatch(getAllNews());
  } catch (error) {
    throw error;
  } finally {
    dispatch({ type: OFF_LOADING });
  }
};

export const editNews = (id, body) => async (dispatch) => {
  try {
    const { data } = await Api.editNews(id, body);
    console.log(data);
    dispatch(getAllNews());
  } catch (error) {
    console.error(error);
  }
};

export const deleteNews = (body) => async (dispatch) => {
  try {
    await Api.deleteNews(body);
    toast.success("Deleted");
    dispatch(getAllNews());
  } catch (error) {
    toast.error(error.response.data.error);
  }
};

export const getAllNews = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_NEWS });
    const { data } = await Api.getAll();
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_NEWS_ERROR, payload: "Error in fetching news " });
  }
};
