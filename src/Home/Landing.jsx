import Box from '@mui/material/Box';
import SocialMediaList from '../SocialMedia/SocialMediaList'
import useStyles from '../Theme/themes'

// DONE: fix breakpoint for landing Title, it shifts to the left and not centered

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.landingBackground} >
      <Box className={classes.landingContainer} >

        <div className={classes.landingTitleContainer}>
          <h1 className={classes.landingTitle}>
            Hola, I'm Lorenzo&nbsp;.
          </h1>
        </div>
        <div className={classes.landingVerticalLine}></div>
        <div className={classes.landingTitleContainer}>
          <h5 className={classes.landingSubTitle}>
            Web Developer&nbsp;.
          </h5>
        </div>
        <SocialMediaList />
      </Box>
    </Box>
  );
}

export default Landing;
