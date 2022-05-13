import Box from '@mui/material/Box';
import useStyles from '../Theme/themes'
import SocialMediaList from '../SocialMedia/SocialMediaList'

const Footer = () => {
  const classes = useStyles();

  return(
    <Box className={classes.footerContainer}>
      <div className={classes.footerParagraphContainer}>
        <p className={classes.footerParagraph}>
          Gracias for Visiting, Connect With Me !
        </p>
      </div>
      <SocialMediaList />
      <div className={classes.footerVerticalLine}></div>
    </Box>
  )

}
export default Footer
