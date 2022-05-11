import useStyles from '../Theme/themes'

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { SocialIcon } from 'react-social-icons';

const mediaList = [
  {text: 'Discord', url: 'https://discord.com/channels/@me'  },
  {text: 'GitHub', url: 'https://github.com/antoni909' },
  {text: 'LinkedIn', url: 'https://www.linkedin.com/in/lorenzo-ortega-antoni/'  },
]

const Footer = () => {
  const classes = useStyles();

  return(
    <Box className={classes.footerContainer}>
      <Box className={classes.socialIconsList}>
        {mediaList.map(( item ) => (
          <ListItem
            button
            className={ classes.socialIconOnHover }
            key={ item.text }
          >
            <SocialIcon 
              rel="noreferrer noopener" 
              style={{ height: 60, width: 60 }} 
              target="_blank" 
              url={ item.url } 
            />
          </ListItem>
        ))}
      </Box>
        <div className={classes.footerVerticalLine}></div>
    </Box>
  )

}
export default Footer
