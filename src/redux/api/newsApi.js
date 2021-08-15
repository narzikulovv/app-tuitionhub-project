import Api from "../../api/index";

class NewsService {
  async addNews(body) {
    return Api.post("/admin/v1/news", body);
  }
  async editNews(id, body) {
    return Api.put("/admin/v1/news/" + id, body);
  }
  async deleteNews(id) {
    return Api.delete("/admin/v1/news/" + id);
  }

  async getAll() {
    return Api.get("/admin/v1/news");
  }
}

export default new NewsService();
