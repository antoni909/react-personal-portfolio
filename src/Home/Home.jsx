import About from './About'
import Education from './Education'
import Projects from './Projects'
import SkillSet from './SkillSet'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <h1>Home Component</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
            <SkillSet />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
