import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Article, Login, NotFound, SignUp } from './pages';
import useUserStore from './store/useUserStore';
import auth from './api/accountAPI';
import isExpired from './utils/isExpired';
import PrimarySearchAppBar from './pages/article/component/PrimarySearchAppBar';

function App() {
  const { isLoadingUser, setUser, resetUser, setIsLoadingUser } = useUserStore();

  useEffect(() => {
    const setUserInformation = async () => {
      if (isExpired('access_expiration')) {
        resetUser();
      } else {
        console.log(localStorage.getItem('access_token'));
        await auth
          .getUser()
          .then((res) => {
            setUser({
              pk: res.data.pk,
              name: res.data.name,
              email: res.data.email,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    setUserInformation();
    setIsLoadingUser(true);
  }, [resetUser, setUser, setIsLoadingUser]);

  return (
    isLoadingUser && (
      <div className="App">
        <BrowserRouter>
          <PrimarySearchAppBar />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Article />} />
            {/* notFound : 일치하는 라우트 없는 경우 처리 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
