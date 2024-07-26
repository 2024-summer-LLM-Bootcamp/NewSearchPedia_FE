import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Thumbnail = ({ src, newsTitle, newsLink, date }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2 }}>
      <CardMedia component="img" sx={{ width: 151, height: 'auto', objectFit: 'cover' }} image={src} alt={null} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h8">
            <a dangerouslySetInnerHTML={{ __html: newsTitle }} href={newsLink}></a>
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
