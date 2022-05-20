import { useState, useRef } from 'react'
import Home from '../Home/Home'
import Footer from '../Footer/Footer.jsx'
import MenuList from '../Navigation/MenuList'
import { Outlet } from 'react-router-dom';
import useStyles from '../Theme/themes';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import {FaLaptopCode, FaGlobeAmericas, FaHamburger, FaMeteor, FaRobot, FaGlasses, FaGraduationCap, FaPencilAlt } from 'react-icons/fa';

import { scrollEffect } from '../Utils/scrollEffect';

const Nav = () => {
  const classes = useStyles();
  const landing = useRef(null)
  const about = useRef(null)
  const orgProjects = useRef(null)
  const relatedEd = useRef(null)
  const previousExp = useRef(null)
  const contact = useRef(null)
  const footer = useRef(null)
  const ref = useRef({ landing,about,orgProjects,relatedEd,previousExp,contact })
  const refArr = [
    { refTarget: landing, icon: <FaMeteor className={ classes.tallMenuIcon } /> },
    { refTarget: about, icon: <FaGlobeAmericas className={ classes.tallMenuIcon } /> },
    { refTarget: orgProjects, icon: <FaLaptopCode className={ classes.tallMenuIcon } /> },
    { refTarget: relatedEd, icon: <FaGraduationCap className={ classes.tallMenuIcon } /> },
    { refTarget: previousExp, icon: <FaRobot className={ classes.tallMenuIcon } /> },
    { refTarget: contact, icon: <FaPencilAlt className={ classes.tallMenuIcon } /> },
    { refTarget: footer, icon: <FaGlasses className={ classes.tallMenuIcon } /> }
  ]
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const renderIconMenu = () => {
    return(
      <>
        { refArr.map( (refItem,idx) => (
            <IconButton
            key={ idx } 
            onClick={ ()=> scrollEffect(refItem.refTarget) }
            >
              { refItem.icon }
            </IconButton >
          ))
        }
      </>
    )
  }

  return (
    <Box>
      <CssBaseline />
      
      <Box className={ classes.navMenuContainer }>
        <Box className={ classes.navIconMenu } >
          {renderIconMenu()}
          <IconButton
            className={ classes.navHamburgerMenuIcon }
            onClick={ handleClick }
            sx={{ fontSize: 60, color:'#30D5C8' }}
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
