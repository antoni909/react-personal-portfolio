import * as React from 'react';
import Home from '../Home/Home'
import { Outlet, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { SocialIcon } from 'react-social-icons';

const drawerWidth = 100;
const menuList = [
  {text: 'About', path: <Link style={{ textDecoration: 'none' }} to="/about">About</Link>},
  {text: 'Resume', path: <Link style={{ textDecoration: 'none' }} to="/resume">Resume</Link>},
  {text: 'Contact', path: <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>}
]
const mediaList = [
  {text: 'GitHub', url: 'https://github.com/antoni909' },
  {text: 'LinkedIn', url: 'https://www.linkedin.com/in/lorenzo-ortega-antoni/'  },
]

const Nav = () => {
  return (
    // TODO: Scroll-to feature 
    // TODO: Go-to feature
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menuList.map((item,idx) => (
            <ListItem
              button
              key={item.text}
            >
              <ListItemText primary={item.path} />
            </ListItem>
          ))}
        </List>
        < Divider />
        <List>
          {mediaList.map((item,idx) => (
            <ListItem
              button
              key={item.text}
            >
              <SocialIcon style={{ height: 40, width: 40 }} url={item.url} target="_blank" rel="noreferrer noopener" />
              {/* <ListItemText primary={item.text} /> */}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Outlet/>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 5 }}
      >
        <Home />
      </Box>
    </Box>

  );
}

export default Nav;
