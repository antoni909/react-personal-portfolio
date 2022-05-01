import About from './About'
import Education from './Education'
import Projects from './Projects'
import SkillSet from './SkillSet'
import ScrollToTop from '../ScrollTo/ScrollToTop'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// DONE: remove fixed menu to clickable hamburger menu to show/hide the menu
// TODO: on Icon hover --> add some effect, on Icon click --> add some effect

const Home = () => {
  return (
  
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
            <SkillSet />
        </Grid>
        <Grid item xs={12} >
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
      </Grid>
      <ScrollToTop />
    </Box>
  );
}

export default Home;
