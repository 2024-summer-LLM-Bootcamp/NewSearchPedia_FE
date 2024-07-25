import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, user }) {
  useEffect(() => {
    if (user.pk === 0) {
      alert('로그인이 필요한 서비스 입니다.');
    }
  });

  return user.pk === 0 ? <Navigate to="/login" /> : children;
}

export default PrivateRoute;
