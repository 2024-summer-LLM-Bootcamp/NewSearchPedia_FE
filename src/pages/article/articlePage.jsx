import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, TextField, Grid, IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useLocation } from 'react-router-dom';
import articleAPI from '../../api/articleAPI';
import serverData from './Data/serverData';
import Thumbnail from './component/thumbnail';
import ArticleItem from './component/articleItem';

export default function Article() {
  const [inputValue, setInputValue] = useState('');
  const [queryResult, setQueryResult] = useState(null);


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      saveUserInput(inputValue);
    }
  };

  const handleClick = () => {
    saveUserInput(inputValue);
  };

  const saveUserInput = (value) => {
    // 입력값이 비어있지 않은지 확인
    if (value.trim()) {
      fetchQueryResult(value);
      setInputValue('');
      // console.log(value);
    }
  };
  const fetchQueryResult = async (query) => {
    try {
      const response = await articleAPI.postArticle(query);
      setQueryResult(response.article || {});
    } catch (error) {
      console.error('Error fetching article detail:', error);
    }
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      {queryResult && 
      <ArticleItem
        news_list={queryResult.news_list || []}
        user_input={queryResult.user_input || ''}
        created_at={new Date(queryResult.created_at).toLocaleString() || ''}
        news_summary={queryResult.news_summary || ''}
        encyc_list={queryResult.encyc_list || []}
      />}
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
