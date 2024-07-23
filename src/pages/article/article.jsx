import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, TextField, Grid } from '@mui/material';
import PrimarySearchAppBar from './PrimarySearchAppBar';

export default function Article() {
  // 서버에서 받아올 뉴스 data
  const newsList = ['뉴스1', '뉴스2', '뉴스3', '뉴스4', '뉴스5', '뉴스6', '뉴스7'];
  // 서버에서 받아올 키워드 data
  const keywords = ['트럼프', '오바마', '바이든', '머스크', '엔비디아'];

  return (
    <Container>
      <PrimarySearchAppBar />
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 500, minHeight: 500, margin: 1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  뉴스 리스트
                </Typography>
                <Typography sx={{ mb: 1.5, marginLeft: '30px' }} color="text.secondary">
                  <ol>
                    {newsList.map((news) => (
                      <li>
                        <a href="https://news.naver.com/">{news}</a>
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
                      {keywords.map((keyword) => (
                        <li>{keyword}</li>
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
            <Card sx={{ minWidth: 500, minHeight: 500, margin: 1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  헤드라인: 트럼프 전 대통령, [사건/소송/활동] 관련 법적 문제 직면
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  부제목?
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                  요약:
                  <br />
                  주요 사건: 도널드 트럼프 전 대통령이 [특정 법적 문제/소송/형사 사건]에 대해 법적 문제에 직면했습니다. 이는 [사건의 주요 내용]과 관련이 있습니다.
                  <br />
                  <br />
                  배경: 이 사건은 [사건의 배경, 예를 들어, 트럼프의 행정부 기간 동안의 행동, 또는 최근의 정치적 상황]과 관련이 있습니다. 트럼프는 [법적 문제의 구체적인 사항이나 관련 법적 논란]을
                  둘러싸고 있습니다.
                  <br />
                  <br />
                  현재 상황: 현재 트럼프는 [법적 절차의 상태, 예를 들어, 소송 진행 상황, 법원 출석, 형량 논의 등]에 있습니다. 최근 [법적 조치, 정치적 반응, 대중의 반응 등]이 주요 이슈로 부각되고
                  있습니다.
                  <br />
                  <br />
                  미래 전망: 이 사건이 어떻게 진행될지, 그리고 트럼프의 정치적 또는 개인적 미래에 어떤 영향을 미칠지에 대한 논의가 활발합니다. 전문가들은 [사건의 잠재적 결과, 향후 법적 절차 등]에 대해
                  의견을 제시하고 있습니다.
                  <br />
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ width: 800, maxWidth: '100%', marginTop: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TextField sx={{ width: '100%' }} fullWidth label="내용을 입력해주세요." id="fullWidth" />
        </Box>
      </Box>
    </Container>
  );
}
