import {useOctokit} from '../Hooks/useOctokit'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../Theme/theme'
import gh_logo from '../Assets/ghlogo.png'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const SoloProjects = () => {
  const navigate = useNavigate()
  const classes = useStyles();

  const { data, isPending, error } = useOctokit(`/users/${process.env.REACT_APP_USER}/repos?per_page=45&sort=updated`)

  const mapData = (repos, pending,err) => {
    console.log('repos',repos)
    if(!repos) return <> No Data </>
    else{
      return(
          <Box
            sx={{
              display: 'flex', 
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              minHeight: '100vh',
            }}
          >
            {repos && repos.map( repo => (
              <Card
                key={repo.name} 
                sx={{ 
                  maxWidth: 340, 
                  minWidth: 340, 
                  minHeight: 240,
                  p: 1,
                  m: 1, 
                }}
              >
              <CardHeader
                title={repo.name}
              />
              <CardContent>
                <Box
                  sx={{
                    display:'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row', 
                    flexWrap: 'wrap', 
                    justifyContent: 'flex-start',
                  }}
                >
                  <Chip
                    avatar={
                      <img
                        alt="github repo"
                        height="40"
                        src={gh_logo}
                      />
                    }
                    label="GH Repo"
                    onClick={()=> window.open(repo.html_url)}
                    variant="outlined"
                  />
                  <Typography 
                    component="div"
                    variant="subtitle1" 
                    >{`Created ${repo.created_at}`} 
                  </Typography>
                </Box>
                  <Typography 
                    component="div"
                    gutterBottom 
                    variant="subtitle2" 
                    >{repo.description} 
                  </Typography>
              </CardContent>
              </Card>
            ))}
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
