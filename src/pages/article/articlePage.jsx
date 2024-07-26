import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Grid, IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import serverData from './Data/serverData';
import Thumbnail from './component/thumbnail';
import ArticleItem from './component/articleItem';

export default function Article() {
  const [inputValue, setInputValue] = useState('');
  const [savedValue, setSavedValue] = useState('');

  const saveUserInput = (value) => {
    // 입력값이 비어있지 않은지 확인
    if (value.trim()) {
      setSavedValue(value);
      // console.log(value);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      saveUserInput(inputValue);
    }
  };

  const handleClick = () => {
    saveUserInput(inputValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ArticleItem {...serverData[0]} />
      <Box
        sx={{
          minWidth: '50%',
          position: 'fixed',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 2,
          boxShadow: 5,
          borderRadius: 5,
        }}
      >
        <TextField sx={{ width: '100%' }} fullWidth label="내용을 입력해주세요." id="fullWidth" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
        <IconButton size="large" edge="end" aria-label="save input" aria-haspopup="true" color="inherit" onClick={handleClick}>
          <ArrowCircleUpIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
