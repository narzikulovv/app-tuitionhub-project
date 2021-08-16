import Api from "../../api/index";
import { config } from "../../utils/config";

class AuthService {
  async login(body) {
    return Api.post("/oauth/token", body, {
      auth: {
        username: "web",
        password: "Yy5jruBmmWTjDDj6",
      },
    });
  }

  async userme() {
    return Api.post(
      "/oauth/check_token",
      {},
      {
        auth: {
          username: "web",
          password: "Yy5jruBmmWTjDDj6",
        },
        params: {
          token: localStorage.getItem(config.TOKEN),
        },
      }
    );
  }
}

export default new AuthService();
