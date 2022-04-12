import { useState, useEffect } from 'react'
import { useStyles } from '../Theme/theme'
import signature from '../Assets/name.png'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
        <Box 
          className={classes.landingBackground}
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',  
            flexDirection: 'row',
            justifyContent: 'center', 
          }}
        >
          <Card 
            sx={{
              maxWidth: 500,
              marginRight: '20%', 
              backgroundColor: 'transparent',
              boxShadow: 'none',}}
            >
            <Typography
              variant='h5'
              component="div"
              gutterBottom 
            > Web Developer
            </Typography>
            <CardMedia
                component="img"
                height="105"
                image={ signature }
                alt="neon signature"
            />
            <Typography
              variant='subtitle1'
              component="div"
              gutterBottom 
            >
              My greatest aspiration is to become a professional in the Tech Industry as a Web Developer. 
              I continue to grow by being adaptive and malleable to new concepts and paradigms. 
              My willingness to work in a team is paramount to my conceptual knowledge and growth. 
              I want to be an effective and approachable developer that is always willing to teach those around me.
            </Typography>
            {
              quote
                ? quote.map(item => (
                  <Typography
                    key={item.text} 
                    variant="h6" 
                    gutterBottom 
                    component="div"
                  >
                  {item.text} 
                  {` - ${item.author}`}
                  </Typography>
                ))
                : null
            }
          </Card>
        </Box>
  );
}

export default About;
