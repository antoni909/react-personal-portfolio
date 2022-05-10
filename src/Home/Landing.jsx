// import signature from '../Assets/images/name.png'
import useStyles from '../Theme/themes'

import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.landingBackground} >
      <Box className={classes.landingContainer} >
        <h2 className={classes.landingTitle}>Lorenzo Ortega</h2>
        <h5 className={classes.landingSubTitle}>Web Developer .</h5>
      </Box>
    </Box>
  );
}

export default Landing;
