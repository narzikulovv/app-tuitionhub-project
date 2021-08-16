import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR,
  ON_LOADING,
  OFF_LOADING,
} from "../type/newsType";

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { news: [], loading: true, error: null };
    case FETCH_NEWS_SUCCESS:
      return { news: action.payload, loading: false, error: null };
    case FETCH_NEWS_ERROR:
      return { news: [], loading: false, error: action.payload };
    case ON_LOADING:
      return { ...state, loading: true };
    case OFF_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
