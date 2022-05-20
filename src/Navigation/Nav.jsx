import React, { useState, useRef } from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer.jsx'
import MenuList from '../Navigation/MenuList'
import { Outlet } from 'react-router-dom';
import useStyles from '../Theme/themes';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { FaHamburger } from 'react-icons/fa';

import { scrollEffect } from '../Utils/scrollEffect';

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

  const landing = useRef(null)
  const about = useRef(null)
  const orgProjects = useRef(null)
  const relatedEd = useRef(null)
  const previousExp = useRef(null)
  const contact = useRef(null)
  const footer = useRef(null)

  const ref = useRef({landing,about,orgProjects,relatedEd,previousExp,contact})

  return (
    <Box>
      <CssBaseline />
      
      <Box 
        className={ classes.navMenuContainer }
      >

        {/* Icon List */}
        <Box className={ classes.navIconMenu } >
          <IconButton
            className={ classes.navHamburgerMenuIcon }
            onClick={ handleClick }
            sx={{ fontSize: 80, color:'#30D5C8' }}
          >
            <FaHamburger />
          </IconButton>
          <ul style={{color:'white', fontSize:'22px'}}>

            <li onClick={()=> scrollEffect(landing)} className="link">Landing</li>
            <li onClick={()=> scrollEffect(about)} className="link">About</li>
            <li onClick={()=> scrollEffect(orgProjects)} className="link">OrgProjects</li>
            <li onClick={()=> scrollEffect(relatedEd)} className="link">RelatedEd</li>
            <li onClick={()=> scrollEffect(previousExp)} className="link">PreviousExp</li>
            <li onClick={()=> scrollEffect(contact)} className="link">Contact</li>
            <li onClick={()=> scrollEffect(footer)} className="link">Footer</li>
          </ul>
        </Box>

        <Menu
          anchorEl={ anchor }
          open={ open }
          onClose={ handleClose }
        >
          <Box className={classes.hamburgerMenuContainer} >
            <MenuList />
          </Box>  
        </Menu>

      </Box>

      <Outlet/>
      <Home ref={ ref } />
      <Footer ref={ footer }/>
    </Box>
  );
}

export default Nav;
