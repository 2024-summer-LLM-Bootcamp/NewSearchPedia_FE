import * as React from 'react';
import { useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Container, TextField, Grid } from '@mui/material';
import PrimarySearchAppBar from './component/PrimarySearchAppBar';
import serverData from './Data/serverData';


export default function Article() {
  const [inputValue, setInput] = useState('');

  const saveUserInput = (value) => {
    setInput(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 엔터키를 눌렀을 때 호출될 함수
      saveUserInput(event.target.value);
    }
  };

  return (
    <>
      <PrimarySearchAppBar />
      <Container maxWidth="">
        <Box sx={{ flexGrow: 1, mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{ margin: 1 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    뉴스 리스트
                  </Typography>
                  <Typography sx={{ mb: 1.5, marginLeft: '30px' }} color="text.secondary">
                    <ol>
                      {serverData.newsList.map((news) => (
                        <li>
                          <a href="https://news.naver.com/">{news.title}</a>
                        </li>
                      ))}
                    </ol>
                  </Typography>
                  <Typography variant="body2">
                    <Typography variant="h5" component="div">
                      키워드 리스트
                    </Typography>
                    <Typography sx={{ mb: 1.5, marginLeft: '30px' }} color="text.secondary">
                      <ol>
                        {serverData.encycList.map((word) => (
                          <li>{word.keyword}</li>
                        ))}
                      </ol>
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card sx={{ margin: 1 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {serverData.userInputValue}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {serverData.created_at}
                  </Typography>
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                    요약 : {serverData.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ maxWidth: '80%', marginTop : 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField sx={{ width: '100%' }} fullWidth label="내용을 입력해주세요." id="fullWidth" onKeyDown={handleKeyDown} />
            {console.log(inputValue)}
          </Box>
        </Box>
      </Container>
    </>
  );
}
