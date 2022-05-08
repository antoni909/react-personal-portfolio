import signature from '../Assets/images/name.png'
import useStyles from '../Theme/themes'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Landing = () => {
  const classes = useStyles();

  return (
        <Box 
          className={classes.landingBackground}
        >
          <Box
            className={classes.landingContainer}
          >
            <Card
              className={classes.landingCard} 
              >
              <CardMedia
                  component="img"
                  height="130"
                  image={ signature }
                  alt="neon signature"
              />
            </Card>
            <Card
              className={classes.landingCard} 
              >
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
