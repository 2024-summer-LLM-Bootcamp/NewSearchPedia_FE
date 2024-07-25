import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Thumbnail = ({ src, alt, news_title, news_link }) => {

  return (
    <Card sx={{ display: 'flex', marginBottom: 2}}>
        <CardMedia
        component="img"
        sx={{ width: 151, height: 'auto', objectFit: 'cover' }}
        image={src}
        alt={alt}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          <a dangerouslySetInnerHTML={{ __html: news_title }} href={news_link}></a>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
      </Box>
    </Card>
  );

};

export default Thumbnail;
