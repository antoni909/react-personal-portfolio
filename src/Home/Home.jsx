import About from './About'
import Contact from '../Contact/Contact'
import Education from './Education'
import Landing from './Landing'
import Projects from './Projects'
import ScrollToTop from '../ScrollTo/ScrollToTop'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// DONE: remove fixed menu to clickable hamburger menu to show/hide the menu
// TODO: on Icon hover --> add some effect, on Icon click --> add some effect

const Home = () => {
  return (
  
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Landing />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12} >
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
      <ScrollToTop />
    </Box>
  );
}

export default Home;
