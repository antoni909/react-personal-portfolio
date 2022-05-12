import gh_logo from '../Assets/images/ghlogo.png'
import { useOctokit } from '../Hooks/useOctokit'
import { useNavigate } from 'react-router-dom'
import useStyles from '../Theme/themes'
import ScrollToTop from '../ScrollTo/ScrollToTop'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { FaHome } from 'react-icons/fa';
import Typography from '@mui/material/Typography';

const SoloProjects = () => {
  const navigate = useNavigate()
  const classes = useStyles();

  const { data, isPending, error } = useOctokit(`/users/${process.env.REACT_APP_USER}/repos?per_page=45&sort=updated`)

  const mapData = (repos, pending,err) => {
    if(!repos) return <> No Data </>
    else{
      return(
        <>
          <Box 
            className={classes.soloProjectsReposContainer} 
            gap={ 1 }
          >
            {repos && repos.map( repo => (
              <Card
                key={ repo.name }
                className={classes.soloProjectsReposCard}
              >
              <CardHeader
                title={ repo.name }
              />
              <CardContent>
                <Box className={classes.soloProjectsReposCardFlex} >
                  <Chip
                    avatar={
                      <img
                        alt="github repo"
                        height="40"
                        src={ gh_logo }
                      />
                    }
                    label="GH Repo"
                    onClick={ ()=> window.open(repo.html_url) }
                    variant="outlined"
                  />
                  <Typography 
                    component="div"
                    variant="subtitle1" 
                    >{`Created ${new Date(repo.created_at).toLocaleString().split(',')[0]}`} 
                  </Typography>
                </Box>
                  <Typography 
                    component="div"
                    variant="subtitle2" 
                    >{ repo.description } 
                  </Typography>
              </CardContent>
              </Card>
            ))}
          </Box>
          <Box
            sx={{ display:'flex', direction:'column' }}
          >  
            <ScrollToTop />
            <div className={ classes.toHomeButton }>
              <FaHome onClick={ () => navigate('/') }> 
              </FaHome>
            </div>
          </Box>
        </>
      )
    }
  }

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
      {mapData(data, isPending, error)}
    </>
  );
}

export default SoloProjects;
