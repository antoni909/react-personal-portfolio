import {useOctokit} from '../Hooks/useOctokit'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// TODO: set-up GH API for use in this app
// await octokit.request('GET /user/repos')
// TODO: each project will display all collaborators & clickable avatar 
// TODO: create a Search Feature that allows the user to search all repos

const Projects = () => {

  const { data } = useOctokit('GET /user/repos')
  console.log('data',data)
  
  return (
    <>
      <h1>Group Projects</h1>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>

          <Grid item xs={4}>
            <Card sx={{ maxWidth: 340 }}>
              <CardHeader
                title="title"
                subheader="subheader"
              />
              <CardMedia
                component="img"
                height="340"
                image="https://via.placeholder.com/300"
                alt="describe the snippet"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 340 }}>
              <CardHeader
                title="title"
                subheader="subheader"
              />
              <CardMedia
                component="img"
                height="340"
                image="https://via.placeholder.com/300"
                alt="describe the snippet"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 340 }}>
              <CardHeader
                title="title"
                subheader="subheader"
              />
              <CardMedia
                component="img"
                height="340"
                image="https://via.placeholder.com/300"
                alt="describe the snippet"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>

      <h1>Solo Projects</h1>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>

          <Grid item xs={4}>
            <Card sx={{ maxWidth: 340 }}>
              <CardHeader
                title="title"
                subheader="subheader"
              />
              <CardMedia
                component="img"
                height="340"
                image="https://via.placeholder.com/300"
                alt="describe the snippet"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 340 }}>
              <CardHeader
                title="title"
                subheader="subheader"
              />
              <CardMedia
                component="img"
                height="340"
                image="https://via.placeholder.com/300"
                alt="describe the snippet"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 340 }}>
              <CardHeader
                title="title"
                subheader="subheader"
              />
              <CardMedia
                component="img"
                height="340"
                image="https://via.placeholder.com/300"
                alt="describe the snippet"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </>
  );
}

export default Projects;
