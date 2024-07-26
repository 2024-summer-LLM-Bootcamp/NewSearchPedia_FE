import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import useUserStore from '../../../store/useUserStore';
import TemporaryDrawer from './drawer';
import auth from '../../../api/accountAPI';

export default function PrimarySearchAppBar() {
  const { user, resetUser } = useUserStore();

  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate('/'); // 메인 페이지로 이동
  };

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  const handleSignupClick = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  const handleLogoutClick = async () => {
    try {
      // 서버에 로그아웃 요청을 보냅니다.
      await auth.logout(); // 서버에서 세션을 종료하는 API 호출을 구현해야 합니다.

      // Zustand 스토어에서 사용자 상태를 리셋합니다.
      resetUser(); // useUserStore에서 직접 resetUser를 호출합니다.

      // 로그인 페이지로 리디렉션합니다.
      // navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}> */}
          {user.pk === 0 ? null : <TemporaryDrawer />}
          {/* </IconButton> */}
          <IconButton size="large" edge="end" color="inherit">
            <Button onClick={handleMainClick} sx={{ color: 'white' }}>
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block', textTransform: 'none' } }}>
                NewSearchPedia
              </Typography>
            </Button>
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {user.pk === 0 ? (
              <>
                <IconButton size="small" edge="end" aria-haspopup="true" color="inherit">
                  <Button onClick={handleLoginClick} sx={{ color: 'white' }}>
                    Login
                  </Button>
                </IconButton>
                <IconButton size="small" edge="end" aria-haspopup="true" color="inherit">
                  <Button onClick={handleSignupClick} sx={{ color: 'white' }}>
                    Signup
                  </Button>
                </IconButton>
              </>
            ) : (
              <>
                <IconButton size="small" edge="end" aria-haspopup="true" color="inherit">
                  <Button onClick={handleLogoutClick} sx={{ color: 'white' }}>
                    Logout
                  </Button>
                </IconButton>
                <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit">
                  <AccountCircle />
                </IconButton>
                <IconButton size="small" edge="end" aria-haspopup="true" color="inherit">
                  {user.name}
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// https://mui.com/material-ui/react-app-bar/
