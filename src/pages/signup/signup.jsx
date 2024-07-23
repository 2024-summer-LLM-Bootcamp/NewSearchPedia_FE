import React, { useState } from 'react';
import { Box, Avatar, Button, TextField, Link, Grid, Typography, Container, InputAdornment, IconButton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import moment from 'moment';
import useUserStore from '@store/useUserStore';
import auth from '../../api/accountAPI';

function SignUp() {
  const { setUser } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const submitData = {
      name: data.get('name'),
      email: data.get('email'),
      password1: data.get('password'),
      password2: data.get('password2'),
    };

    if (submitData.password1 !== submitData.password2) alert('비밀번호가 일치하지 않습니다.');
    else
      auth
        .signUp(submitData)
        .then((res) => {
          console.log('signup success', res);
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('access_expiration', moment().add(30, 'minute').format('yyyy-MM-DD HH:mm:ss'));
          setUser(res.data.user);
          window.location.href = '/';
        })
        .catch((err) => {
          console.log('signup err', err);
          // text field 입력값 에러인 경우 헬퍼텍스트
          const serverErrors = err.response.data;
          setErrors({
            name: serverErrors.name?.[0] || '',
            email: serverErrors.email?.[0] || '',
            password1: serverErrors.password1?.[0] || '',
            password2: serverErrors.password2?.[0] || '',
          });
        });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField autoComplete="name" name="name" required fullWidth id="name" label="Name" autoFocus error={!!errors.name} helperText={errors.name} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" error={!!errors.email} helperText={errors.email} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClick} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="new-password"
                error={!!errors.password1}
                helperText={errors.password1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClick} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type={showPassword ? 'text' : 'password'}
                required
                fullWidth
                name="password2"
                label="Password check"
                id="password2"
                error={!!errors.password1}
                helperText={errors.password1}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." />
            </Grid> */}
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
