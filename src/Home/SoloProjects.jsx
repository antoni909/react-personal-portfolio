import {useOctokit} from '../Hooks/useOctokit'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../Theme/theme'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const SoloProjects = () => {
  const navigate = useNavigate()
  const classes = useStyles();

  const { data, isPending, error } = useOctokit(`/users/${process.env.REACT_APP_USER}/repos?per_page=45&sort=updated`)
  console.log('data',data)
  const mapData = (repos, pending,err) => {
    console.log('repos',repos)
    if(!repos) return <> No Data </>
    else{
      return(
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1}>
                {repos && repos.map( repo => (
                  <Grid 
                    key={repo.name} 
                    item 
                    xs={4}
                  >
                    <Card
                      sx={{ maxWidth: 340 }}
                    >
                      <CardHeader
                        title={repo.name}
                        // subheader={repo.description}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {repo.description} 
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
            <Button 
            className={classes.Button}
            color="primary"
            onClick={() => navigate('/') }
            size="medium"
            variant="contained"
          > home 
      </Button>
          </Box>
      )
    }
  }

  return (mapData(data, isPending, error));
}

export default SoloProjects;
