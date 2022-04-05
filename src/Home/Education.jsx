// import { useStyles } from '../Theme/theme'
import cf_cert from '../Assets/cf_cert.png'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Education = () => {
  // const classes = useStyles();
  return (
    <>
        <Box sx={{flexGrow: 1}}>
          <h1>Education</h1>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper>
                <img 
                  alt="Code Fellows Certification" 
                  src={cf_cert} 
                  sx={{ width: '25%', height: '25%'}}
                />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <p>
              My greatest aspiration is to become a professional in the Tech Industry as a Software Developer. I continue to grow by being adaptive and malleable to new concepts and paradigms. My willingness to work in a team is paramount to my conceptual knowledge and growth. I want to be an effective and approachable developer that is always willing to teach those around me.
              </p>
            </Grid>
          </Grid>
        </Box>
    </>
  );
}

export default Education;
