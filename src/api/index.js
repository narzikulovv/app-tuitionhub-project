import axios from "axios";

import { config } from "../utils/config";

const $api = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    common: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  },
});

$api.interceptors.request.use(
  (conf) => {
    const token = localStorage.getItem(config.TOKEN);
    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
    }
    return conf;
  },
  (err) => Promise.reject(err)
);

$api.interceptors.response.use(
  (conf) => conf,
  (err) => {
    if (
      window.location.pathname !== "/login" &&
      err?.response?.status === 401
    ) {
      localStorage.removeItem(config.TOKEN);
      window.location.replace("/login");
    }
    throw err;
  }
);

export default $api;
