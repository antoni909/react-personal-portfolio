import { useState } from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer.jsx'
import { Outlet, Link } from 'react-router-dom';
import useStyles from "../Theme/themes";

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemText';
import ListItemText from '@mui/material/ListItemText';

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

// DONE: Redesign drawer navigation to instead use a hamburger menu
// DONE: Scroll-to feature 

// TODO: Go-to feature
// DONE: Remove Social Icons from Hamburger Menu, fix icons above the hamburger icon

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
    <Box>
      <CssBaseline />

      <Box 
        className={ classes.navMenuContainer }
      >
        <Box className={ classes.navIconMenu } >
          <IconButton
            className={ classes.navHamburgerMenuIcon }
            onClick={ handleClick }
            sx={{ fontSize: 80, color:'#30D5C8' }}
          >
            <FaHamburger />
          </IconButton>
        </Box>

        <Menu
          anchorEl={ anchor }
          open={ open }
          onClose={ handleClose }
        >
          <Box className={classes.hamburgerMenuContainer} >
            <List>
              {menuList.map(( item ) => (
                <ListItem
                  button
                  className={classes.hamburgerMenuIconOnHover}
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

      <Outlet/>
      <Home />
      <Footer />
    </Box>
  );
}

export default Nav;
