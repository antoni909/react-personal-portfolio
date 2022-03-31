import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import pic from '../Assets/profile.jpeg'

const About = () => {

  return (
    <>
      <h1>About Component</h1>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img 
              alt="Lorenzo Profile" 
              src={pic} 
              sx={{ width: 60, height: 60 }}
            />
          </Grid>
          <Grid item xs={8}>
            <p>
            My greatest aspiration is to become a professional in the Tech Industry as a Software Developer. I continue to grow by being adaptive and malleable to new concepts and paradigms. My willingness to work in a team is paramount to my conceptual knowledge and growth. I want to be an effective and approachable developer that is always willing to teach those around me.
            </p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default About;
