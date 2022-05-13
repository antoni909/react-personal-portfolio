import { useState } from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
import useStyles from '../Theme/themes';
import SocialMediaList from './SocialMediaList'

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { FaHamburger } from 'react-icons/fa';

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
            <SocialMediaList />
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
