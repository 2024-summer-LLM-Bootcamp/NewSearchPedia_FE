import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Grid, IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import PrimarySearchAppBar from './component/PrimarySearchAppBar';
import serverData from './Data/serverData';
import Thumbnail from './component/thumbnail';

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
    <>
      <PrimarySearchAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ margin:1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  뉴스 리스트
                </Typography>
                <Typography sx={{ mb: 1.5, marginLeft: '30px' }} color="text.secondary">
                  <ol>
                    {serverData[0].news_list.map((news) => (
                      <li style={{ display: 'flex' }}>
                        {/* // eslint-disable-next-line  */}
                        <Thumbnail src={news.thumbnail} alt={news.title} newsTitle={news.title} newsLink={news.link} date={news.date} />
                      </li>
                    ))}
                  </ol>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ margin: 1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {serverData[0].user_input}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {serverData[0].created_at}
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                  요약 : {serverData[0].news_summary}
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ margin : 1}}>
              <CardContent>
                <Typography variant="h5" component="div">
                  키워드 리스트
                </Typography>
                <Typography sx={{ mb: 1.5, marginLeft: '30px' }} color="text.secondary">
                  <ol>
                    {serverData[0].encyc_list.map((word) => (
                      <li>
                        {/* // eslint-disable-next-line  */}
                        <a dangerouslySetInnerHTML={{ __html: word.title }} href={word.link}></a>
                      </li>
                    ))}
                  </ol>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

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
    </>
  );
}
