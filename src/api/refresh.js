import isExpired from '@utils/isExpired.js';
import auth from './accountAPI';

const goToLogin = () => {
  alert('로그인이 필요합니다.');
  window.location.replace('/login');
};

const refresh = async (config) => {
  const expireAt = localStorage.getItem('access_expiration');
  const token = localStorage.getItem('access_token');

  if (!expireAt) {
    console.log(`accessToken doesn't exist`);
    return config;
  }
  if (isExpired('access_expiration')) {
    console.log(`accessToken expired`);
    return config;
  }

  if (config.headers) {
    config.headers.Authorization = `Bearer ${String(token)}`;
  }
  return config;
};

const refreshErrorHandle = (err) => {
  console.log('refreshErrorHandle', err);
  if (err !== null) {
    auth.logout().catch((error) => {
      console.error(error);
    });
    goToLogin();
  }
};

export { refresh, refreshErrorHandle };
