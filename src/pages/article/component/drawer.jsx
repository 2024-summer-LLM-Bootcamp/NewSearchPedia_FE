import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemText, Pagination } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ArticleSearch from './articleSearch';
import articleAPI from '../../../api/articleAPI';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchArticleList = async (page) => {
    try {
      const response = await articleAPI.getArticles(page);
      setArticleList(response.results);
      setTotalPages(Math.ceil(response.count / 10)); // assuming 10 items per page
    } catch (error) {
      console.error('Error fetching article list:', error);
    }
  };

  useEffect(() => {
    fetchArticleList(currentPage); // Fetch articles for the current page
  }, [currentPage]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const preventClickPropagation = (event) => {
    event.stopPropagation();
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleArticleClick = (id) => () => {
    navigate(`/detail/${id}`); // Navigate to URL with article ID
  };
  
  

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={preventClickPropagation}>
      <ArticleSearch />
      <List>
        {articleList.length > 0 ? (
          articleList.map((article, index) => (
            <ListItem key={index}>
              <Button onClick={handleArticleClick(article.id)}>
                <ListItemText primary={article.user_input} />
              </Button>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No articles available" />
          </ListItem>
        )}
      </List>
      <Divider />
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
      />
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          color: '#ffffff',
          backgroundColor: '#3f51b5',
          '&:hover': {
            backgroundColor: '#303f9f',
          },
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
