import SoloProjects from './SoloProjects'
import GroupProjects from './GroupProjects'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// TODO: set-up GH API for use in this app
// await octokit.request('GET /user/repos')
// TODO: each project will display all collaborators & clickable avatar 
// TODO: create a Search Feature that allows the user to search all repos

const Projects = () => {
  
  return (
    <>
      <h1>Group Projects</h1>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <GroupProjects />
          </Grid>
        </Grid>
      </Box>
      
      <h1>Solo Projects</h1>
      <SoloProjects />
    </>
  );
}

export default Projects;
