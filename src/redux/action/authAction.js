import Api from "../api/authApi";

import { config } from "../../utils/config";

export const login = (body) => async () => {
  try {
    const { data } = await Api.login(body);
    localStorage.setItem(config.TOKEN, data.access_token);
  } catch (error) {
    localStorage.removeItem(config.TOKEN);
    throw error;
  }
};

export const userme = () => async () => {
  try {
    await Api.userme();
  } catch (error) {
    localStorage.removeItem(config.TOKEN);
    console.error(error.response.data.error);
  }
};
