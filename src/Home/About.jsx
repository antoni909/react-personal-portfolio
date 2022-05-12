import { useState, useEffect } from 'react'
import useStyles from '../Theme/themes'

import Box from '@mui/material/Box';

// TODO: adjust profile pic and text size/alignment

const About = () => {
  const classes = useStyles();
  const [quote,setQuote] = useState([])

  const randomIdx = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }
  
  useEffect(()=>{
    const getProgrammerQuote = () => {
      fetch(process.env.REACT_APP_QUOTES_API)
        .then( res => {
          if(!res.ok) console.error('err',res)
          return res.json()
        }).then(res => {
          const idx = randomIdx(0,res.length)
          setQuote([{...res[idx]}])}
          )
    }
    getProgrammerQuote()
  },[])

  return (
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
              {quote
                  ? quote.map(item => (
                    <div
                      className={classes.aboutQuoteContainer}
                      key={item.text}
                    >
                      <h3 className={classes.aboutQuote}>"{item.text}"</h3>
                      <h5 className={classes.aboutQuote}>{`- ${item.author}`}</h5>
                    </div>
                  ))
                  : null
              }
          </div>
        </Box>
      </Box>
  
  );
}

export default About;
