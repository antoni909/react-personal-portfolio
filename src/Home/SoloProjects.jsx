import useStyles from '../Theme/themes'
import SoloProjectsCards from './SoloProjectsCards'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const SoloProjects = () => {

  const classes = useStyles();

  return (
    <>
      <Box className={classes.soloProjectsLandingContainer} >
        <Card className={classes.soloProjectsLandingCard} >
          <Typography
            variant='h1'
            component="div"
          > Welcome
          </Typography>
          <Typography
            variant='h4'
            component="div"
            sx={{ marginLeft:10 }}
          > to my solo
          </Typography>
          <Typography
            variant='h1'
            component="div"
            gutterBottom 
          > GitHub Projects 🤓
          </Typography>
        </Card>
      </Box>
      <SoloProjectsCards />
    </>
  );
}

export default SoloProjects;
