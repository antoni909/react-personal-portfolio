import * as React from 'react';
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Outlet, Link } from 'react-router-dom';
const drawerWidth = 140;
const menuList = [
  {text: 'About', path: <Link style={{ textDecoration: 'none' }} to="/about">About</Link>},
  {text: 'Resume', path: <Link style={{ textDecoration: 'none' }} to="/resume">Resume</Link>},
  {text: 'Contact', path: <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>}
]
const mediaList = [
  {text: 'GitHub' },
  {text: 'LinkedIn' },
  {text: 'Twitter' },
  {text: 'Discord' },
]

function Nav() {
  return (

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
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Outlet/>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Home />
      </Box>
    </Box>

  );
}

export default Nav;
