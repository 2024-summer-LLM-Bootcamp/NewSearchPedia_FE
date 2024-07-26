import Api from './api.js';

const articleAPI = {
  getArticles(page = 1, search = '') {
    return Api.get(`/api/articles/?page=${page}&search=${search}`);
  },
  getArticle(articleId) {
    return Api.get(`/api/articles/detail/${articleId}`);
  },
  postArticle(data) {
    return Api.post(`/api/articles/`, {query:data});
  },
};

export default articleAPI;
