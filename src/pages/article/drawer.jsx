import * as React from 'react';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import ArticleSearch from './articleSearch';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
  
    const itemsPerPage = 4; // 페이지당 항목 수

    //서버에서 받아올? 사용자 입력값 (예시)
    const items = ['Inbox', 'Starred', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam'];
    
    const handleChangePage = (event, newPage) => {
      setCurrentPage(newPage);
    };
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const preventClickPropagation = (event) => {
      event.stopPropagation();
    };
  
    const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={preventClickPropagation}>
        <ArticleSearch />
        <List>
          {paginatedItems.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
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