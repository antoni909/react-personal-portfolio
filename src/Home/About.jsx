import { useStyles } from '../Theme/theme'
import pic from '../Assets/profile.jpeg'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const About = () => {
  const classes = useStyles();

  // TODO: adjust profile pic and text size/alignment
  return (
    <>
        <Box 
          sx={{flexGrow: 1}} 
          className={classes.landingBackground}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img 
                alt="Lorenzo Profile" 
                src={pic} 
                sx={{ width: 60, height: 60 }}
                />
            </Grid>
            <Grid item xs={8}>
              <Paper
                elevation={8}
              >
                <Typography
                  variant='body1'
                  gutterBottom 
                  component="div"
                >
                  My greatest aspiration is to become a professional in the Tech Industry as a Web Developer. 
                  I continue to grow by being adaptive and malleable to new concepts and paradigms. 
                  My willingness to work in a team is paramount to my conceptual knowledge and growth. 
                  I want to be an effective and approachable developer that is always willing to teach those around me.
                </Typography>

              </Paper>
            </Grid>
          </Grid>
        </Box>
    </>
  );
}

export default About;
