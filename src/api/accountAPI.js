import axios from './confg.js';
import Api from './api.js';

const auth = {
  signUp(data) {
    delete axios.defaults.headers.common.Authorization;
    return axios.post('/api/accounts/dj-rest-auth/registration/', data);
  },
  login(data) {
    delete axios.defaults.headers.common.Authorization;
    return axios.post('/api/accounts/dj-rest-auth/login/', data);
  },
  logout() {
    delete Api.defaults.headers.common.Authorization;
    localStorage.removeItem('access_expiration');
    localStorage.removeItem('access_token');
    // return Api.post('/api/accounts/dj-rest-auth/logout/');
  },
  getUser() {
    return Api.get('/api/accounts/dj-rest-auth/user/');
  },
  refresh() {
    return axios.post(`/api/accounts/dj-rest-auth/token/refresh/`);
  },
};

export default auth;
