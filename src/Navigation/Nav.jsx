import { useState } from 'react'
import Home from '../Home/Home'
import { Outlet, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemText';
import ListItemText from '@mui/material/ListItemText';
import { SocialIcon } from 'react-social-icons';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { FaHamburger } from 'react-icons/fa';
import { FcDocument, FcEngineering, FcContacts } from "react-icons/fc";

const menuList = [
  {
    text: 'Projects', 
    path: <Link style={{ textDecoration: 'none' }} 
    to="/solo_projects">Projects</Link>,
    menuIcon: <FcEngineering style={{ height: 40, width: 40 }}/>
  },
  {
    text: 'Resume', 
    path: <Link style={{ textDecoration: 'none' }} 
    to="/resume">Resume</Link>,
    menuIcon: <FcDocument style={{ height: 40, width: 40 }}/>
  },
  {
    text: 'Contact', 
    path: <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>,
    menuIcon: <FcContacts style={{ height: 40, width: 40 }}/>
  }
]
const mediaList = [
  {text: 'GitHub', url: 'https://github.com/antoni909' },
  {text: 'Discord', url: 'https://discord.com/channels/@me'  },
  {text: 'LinkedIn', url: 'https://www.linkedin.com/in/lorenzo-ortega-antoni/'  },
]

// DONE: Redesign drawer navigation to instead use a hamburger menu
// DONE: Scroll-to feature 
// TODO: Go-to feature

const Nav = () => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <Box>
      <CssBaseline />

      <Box 
        sx={{
          position:'fixed', 
          zIndex:0
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
          color="secondary"
        >
          <FaHamburger />
        </IconButton>

        <Menu
          anchorEl={ anchor }
          id="long-menu"
          open={ open }
          onClose={ handleClose }
        >
          <Box
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
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
                  /> {item.text}
                </ListItem>
              ))}
            </List>
            <List>
              {menuList.map(( item ) => (
                <ListItem
                  button
                  key={item.text}
                >
                  <ListItemIcon>
                    {item.menuIcon}
                  </ListItemIcon>
                  <ListItemText primary={item.path} />
                </ListItem>
              ))}
            </List>

          </Box>  
        </Menu>

      </Box>
      
      {/* <Outlet/> */}
      <Home />
    </Box>
  );
}

export default Nav;
