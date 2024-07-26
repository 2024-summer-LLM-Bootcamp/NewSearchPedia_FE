import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Thumbnail = ({ src, newsTitle, newsLink, date }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2, width: 900, height: 150 }}> {/* 고정된 크기 */}
      <CardMedia 
        component="img" 
        sx={{ 
          width: 150, // 이미지의 너비를 설정
          height: 150, // 이미지의 높이를 설정
          objectFit: 'cover' // 이미지 크기 조절 방식
        }} 
        image={src} 
        alt={null} 
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            <a dangerouslySetInnerHTML={{ __html: newsTitle }} href={newsLink} />
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {date}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Thumbnail;
