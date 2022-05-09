// import signature from '../Assets/images/name.png'
import useStyles from '../Theme/themes'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.landingBackground} >
      <Box className={classes.landingContainer} >
        <Card className={classes.landingCard} >
          <h3 className={classes.landingCardTitles}>Lorenzo A. Ortega
          </h3>
          <Typography
            className={classes.landingCardTitles}
            variant='h3'
            component="div" 
          > Web Developer
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default Landing;
