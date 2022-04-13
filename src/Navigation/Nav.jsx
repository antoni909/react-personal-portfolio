import { useState } from 'react'
import Home from '../Home/Home'
import { Outlet, Link } from 'react-router-dom';
import { useStyles } from '../Theme/theme';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { SocialIcon } from 'react-social-icons';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { FaHamburger } from 'react-icons/fa';

const menuList = [
  {
    text: 'Projects', 
    path: <Link style={{ textDecoration: 'none' }} 
    to="/solo_projects">GitHub Projects</Link>
  },
  {
    text: 'Resume', 
    path: <Link style={{ textDecoration: 'none' }} 
    to="/resume">Resume</Link>
  },
  {
    text: 'Contact', 
    path: <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>}
]
const mediaList = [
  {text: 'GitHub', url: 'https://github.com/antoni909' },
  {text: 'Discord', url: 'https://discord.com/channels/@me'  },
  {text: 'LinkedIn', url: 'https://www.linkedin.com/in/lorenzo-ortega-antoni/'  },
]

// TODO: redesign navigation to instead use a hamburger menu
// DONE: Scroll-to feature 
// TODO: Go-to feature
const Nav = () => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <Box 
      sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <Box 
        sx={{
          position:'fixed', 
          zIndex:1
        }}  
      >
        <IconButton
          aria-label="more"
          id="long-button"
          onClick={ handleClick }
          sx={{ 
            fontSize: 60, 
            marginLeft:5, 
            marginTop:5 
          }}
        >
          <FaHamburger />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={ anchor }
          open={ open }
          onClose={ handleClose }
        >
          <List>
            {menuList.map(( item ) => (
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
            {mediaList.map(( item ) => (
              <ListItem
                button
                key={item.text}
              >
                <SocialIcon 
                  rel="noreferrer noopener" 
                  style={{ height: 40, width: 40 }} 
                  target="_blank" 
                  url={ item.url } 
                />
              </ListItem>
            ))}
          </List>
        </Menu>
      </Box>
      <Outlet/>
      <Box
        // component="main"
        // sx={{ flexGrow: 1,p: 0 }}
        // sx={{ display:'flex' }}
      >
        <Home />
      </Box>
    </Box>
  );
}

export default Nav;
