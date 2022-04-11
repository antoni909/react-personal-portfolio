import { useState, useEffect } from 'react'
import { useStyles } from '../Theme/theme'
import pic from '../Assets/profile.jpeg'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

// TODO: adjust profile pic and text size/alignment

const About = () => {
  const classes = useStyles();
  const [quote,setQuote] = useState([])
  const [error,setError] = useState([])

  const getProgrammerQuote = () => {
    fetch(process.env.REACT_APP_QUOTES_API)
      .then( res => {
        if(!res.ok) setError([`HTTP err, status: ${res.status}`])
        return res.json()
      }).then(res => setQuote([...quote,{...res}]))
  }

  useState(()=>{
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
            <Typography
              variant='h2'
              component="div"
              gutterBottom 
            > Lorenzo A Ortega
            </Typography>
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
          </Card>
            {
              quote
                ? quote.map(item => (
                  <Typography
                    key={item.id} 
                    variant="h6" 
                    gutterBottom 
                    component="div"
                  >
                  {item.en} 
                  {` - ${item.author}`}
                  </Typography>
                ))
                : null
            }

          <img 
            alt="Lorenzo Profile" 
            src={pic} 
            sx={{ width: 60, height: 60 }}
          />
        </Box>

  );
}

export default About;
