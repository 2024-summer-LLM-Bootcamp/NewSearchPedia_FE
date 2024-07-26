import * as React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Thumbnail from './thumbnail';

function ArticleItem({ news_list, user_input, created_at, news_summary, encyc_list }) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card sx={{ margin: 1 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              뉴스 리스트
            </Typography>
            <Typography sx={{ mb: 1.5, marginLeft: '30px' }} color="text.secondary">
              <ol>
                {news_list.map((news) => (
                  <li style={{ display: 'flex' }}>
                    {/* // eslint-disable-next-line  */}
                    <Thumbnail src={news.thumbnail} newsTitle={news.title} newsLink={news.link} date={news.date} />
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
              {user_input}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {created_at}
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
              요약 : {news_summary}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ margin: 1 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              키워드 리스트
            </Typography>
            <Typography sx={{ mb: 1.5, marginLeft: '30px' }} color="text.secondary">
              <ol>
                {encyc_list.map((word) => (
                  <li>
                    {/* // eslint-disable-next-line  */}
                    <a dangerouslySetInnerHTML={{ __html: word.title }} href={word.link} />
                  </li>
                ))}
              </ol>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ArticleItem;
