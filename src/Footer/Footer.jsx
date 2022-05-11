import useStyles from '../Theme/themes'
import Box from '@mui/material/Box';

const Footer = () => {
  const classes = useStyles();

  return(
    <Box className={classes.footerBackgroundImage}>
      <Box className={classes.footer}>
        Basic Footer
      </Box>
    </Box>
  )

}
export default Footer
