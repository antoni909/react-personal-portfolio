import { forwardRef } from 'react'
import About from './About'
import Contact from '../Contact/Contact'
// import Education from './Education'
import RelatedEducation from './RelatedEducation'
import PreviousExp from './PreviousExp'
import Landing from './Landing'
import Projects from './Projects'
import ScrollToTop from '../ScrollTo/ScrollToTop'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// DONE: remove fixed menu to clickable hamburger menu to show/hide the menu
// TODO: on Icon hover --> add some effect, on Icon click --> add some effect

const Home = forwardRef(( props,ref ) => {
  const { about, contact, landing, orgProjects, relatedEd, previousExp } = ref.current
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Landing  ref={ landing } />
        </Grid>
        <Grid item xs={12}>
          <About ref={ about } />
        </Grid>
        <Grid item xs={12} >
          <Projects ref={ orgProjects } />
        </Grid>
        <Grid item xs={12}>
          <RelatedEducation ref={ relatedEd }/>
        </Grid>
        <Grid item xs={12}>
          <PreviousExp ref={ previousExp }/>
        </Grid>
        <Grid item xs={12}>
          <Contact
            ref={ contact }
          />
        </Grid>
      </Grid>
      <ScrollToTop />
    </Box>
  )
})

export default Home;
