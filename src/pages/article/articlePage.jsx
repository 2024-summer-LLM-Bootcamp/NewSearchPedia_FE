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
  const [query, setQuery] = useState('');
  const [articleDetail, setArticleDetail] = useState(null);
  const [queryResult, setQueryResult] = useState(null);


  const fetchArticleDetail = async (articleId) => {
    try {
      const response = await articleAPI.getArticle(articleId);
      setArticleDetail(response.article);
    } catch (error) {
      console.error('Error fetching article detail:', error);
    }
  };

  useEffect(() => {
    const articleId = 13; // 예시로 articleId를 17로 설정, 실제 articleId 값을 사용
    // const query = '명탐정 코난';
    fetchArticleDetail(articleId);
    fetchQueryResult(query);
  }, []);

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
      setQuery(value);
      // console.log(value);
    }
  };
  const fetchQueryResult = async (query) => {
    try {
      const response = await articleAPI.postArticle(query);
      setQueryResult(response.article);
    } catch (error) {
      console.error('Error fetching article detail:', error);
    }
  };

  if (!articleDetail) {
    return <div>Loading...</div>; // 데이터 로딩 중일 때 로딩 메시지 표시
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ArticleItem
        news_list={queryResult.news_list || []}
        user_input={queryResult.user_input || ''}
        created_at={new Date(queryResult.created_at).toLocaleString() || ''}
        news_summary={queryResult.news_summary || ''}
        encyc_list={queryResult.encyc_list || []}
      />
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
