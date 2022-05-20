import { forwardRef } from 'react'
import Box from '@mui/material/Box';
import useStyles from '../Theme/themes'
import SocialMediaList from '../SocialMedia/SocialMediaList'

const Footer = forwardRef((props,footerRef) => {
  const classes = useStyles();

  return(
    <div id='footer' ref={ footerRef } >
      <Box className={classes.footerContainer}>
        <div className={classes.footerParagraphContainer}>
          <p className={classes.footerParagraph}>
            Gracias for Visiting, Connect With Me !
          </p>
        </div>
        <SocialMediaList />
        <div className={classes.footerVerticalLine}></div>
      </Box>
    </div>
  
  )

})

export default Footer
