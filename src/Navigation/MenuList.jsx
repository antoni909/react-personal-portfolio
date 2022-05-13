import useStyles from '../Theme/themes';

import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemText';
import ListItemText from '@mui/material/ListItemText';
import { FcDocument, FcEngineering } from "react-icons/fc";

const menuItemsList = [
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
]

const MenuList = () => {
  const classes = useStyles();
  return(
    <List>
    {menuItemsList.map(( item ) => (
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
  )
}

export default MenuList
