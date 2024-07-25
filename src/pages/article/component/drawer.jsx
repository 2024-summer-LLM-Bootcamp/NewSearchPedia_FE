import * as React from 'react';
import { useState } from 'react';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox as InboxIcon, Menu as MenuIcon } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import ArticleSearch from './articleSearch';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const preventClickPropagation = (event) => {
    event.stopPropagation();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={preventClickPropagation}>
      <ArticleSearch />
      <List></List>
      <Divider />
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
      <Drawer open={open} onClose={toggleDrawer(false)} onClick={handleLoadClick}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
