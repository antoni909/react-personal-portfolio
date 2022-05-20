import { forwardRef } from 'react'
import useStyles from '../Theme/themes'
import Quotes from './Quotes'
import Box from '@mui/material/Box';

// DONE: move quotes logic into own comoponent --> Quotes.jsx
// TODO: include my approach to programming

const About = forwardRef((props,aboutRef) => {
  const classes = useStyles();

  return (
    <div 
      id="landing"
      ref={ aboutRef }
    >
      <Box className={classes.aboutBackground}>
        <Box className={classes.aboutContainer}>
          <h2 className={classes.aboutTitle}>About Me</h2>
          <div className={classes.aboutCard}>
            <p className={classes.aboutCardParagraph}>
              My greatest aspiration is to become a professional in the Tech Industry as a Web Developer. 
              I continue to grow by being adaptive and malleable to new concepts and paradigms. 
              My willingness to work in a team is paramount to my conceptual knowledge and growth. 
              I want to be an effective and approachable developer that is always willing to teach those around me.
            </p>
            <Quotes/>
          </div>
        </Box>
      </Box>
    </div>
  );
})

export default About;
