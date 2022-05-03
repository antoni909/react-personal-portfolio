import { useNavigate } from 'react-router-dom'
import useStyles from '../Theme/themes.js'
import { FaHome } from 'react-icons/fa';
import Box from '@mui/material/Box';

import WhyMe from './WhyMe'
import MyDocument from './MyDocument'
import ScrollToTop from '../ScrollTo/ScrollToTop'

// TODO: view and download resume feature
// TODO: add font style
const Resume = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  return (
    <>
      <Box 
        className={classes.resumeBackground}
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',  
          flexDirection: 'row',
          justifyContent: 'center', 
        }}
      >
        <WhyMe />
      </Box>
      <Box
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',  
          flexDirection: 'row',
          justifyContent: 'center', 
        }}
      >
        <MyDocument />
        <div 
          className={classes.toHomeButton}
          >
          <FaHome 
            color="magenta"
            onClick={() => navigate('/react-personal-portfolio') }
          > 
          </FaHome>
        </div>
        <ScrollToTop />
      </Box>
    </>

  );
}

export default Resume;
