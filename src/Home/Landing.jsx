import useStyles from '../Theme/themes'
import Box from '@mui/material/Box';

// TODO: fix breakpoint for landing Title, it shifts to the left and not centered
const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.landingBackground} >
      <Box className={classes.landingContainer} >
        <h2 className={classes.landingTitle}>Hola, I'm Lorenzo.</h2>
        <div className={classes.landingVerticalLine}></div>
        <h5 className={classes.landingSubTitle}>Web Developer .</h5>
      </Box>
    </Box>
  );
}

export default Landing;
