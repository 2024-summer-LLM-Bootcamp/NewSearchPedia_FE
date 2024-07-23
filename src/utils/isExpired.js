import moment from 'moment';

// 기한 만료 boolean값이 저장됨
const isExpired = (expire) => {
  const expiration = localStorage.getItem(expire);

  if (!expiration) {
    //접근 기한이 없을때
    return true;
  }

  const currentDateTime = moment();
  const expirationDateTime = moment(expiration, 'YYYY-MM-DD HH:mm:ss');

  return currentDateTime.isAfter(expirationDateTime);
  //현재 시각이 기한 이후면 true 아니면 false
};

export default isExpired;
