import Api from './api.js';

const articleAPI = {
  getArticles(page = 0) {
    return Api.get(`/api/articles?page=${page}`);
  },
  getArticle(articleId) {
    return Api.get(`/api/articles/detail/${articleId}`);
  },
  postArticle(data) {
    return Api.post(`/api/articles/`, data);
  },
};

export default articleAPI;
