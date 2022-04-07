import { useState, useEffect } from 'react'
import { useOctokit } from '../Hooks/useOctokit'
// import { useGetOrgs } from '../Hooks/useGetOrgs'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { octokit } from '../Utils/gh';

// TODO map over orgs to render Name, Members Name/Avatar, Description, url
const cpd = {
Team_Meow:{
  orgName: "Team-Meow",
  orgRepos: "https://api.github.com/orgs/Team-Meow/repos"
  },
Wellness_Warriors:{
  orgName: "Wellness-Warriors",
  orgRepos: "https://api.github.com/orgs/Wellness-Warriors/repos"
  },
basic_cms:{
  orgName: "basic-cms",
  orgRepos: "https://api.github.com/orgs/basic-cms/repos"
  },
basic_messenger:{
  orgName: "basic-messenger",
  orgRepos: "https://api.github.com/orgs/basic-messenger/repos"
  },
doc_devs:{
  orgName: "doc-devs",
  orgRepos: "https://api.github.com/orgs/doc-devs/repos"
  },
healthy_queue:{
  orgName: "healthy-queue",
  orgRepos: "https://api.github.com/orgs/healthy-queue/repos"
  },
}
const OrgProjects = () => {
  const [ list, setList ] = useState([])
  const [ org, setOrg ] = useState({})
  
  // const { data } = useOctokit(`/orgs/${'Team-Meow'}/members`)
  // const { orgData } = useGetOrgs('/user/orgs')
  
  const getOrgMembers = async () => {
    let store = []
    let res
    for(const [key,value] of Object.entries(cpd)){
      console.log('key: ',key,'value: ', value)
      // console.log(`/orgs/${value.orgName}/members`)
      res = await octokit.request(`/orgs/${value.orgName}/members`, {org: 'org'})
      const membersList = res.data
      console.log('cpd[key]',cpd[key] = {...cpd[key],membersList: [...membersList]})
      console.log('cpd',cpd)

    }

  }

  getOrgMembers(cpd)

  useEffect( () => {

  },[])

  return (
    <>

      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          { 
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
          }
        </Grid>
      </Box>

    </>

  );
}

export default OrgProjects;
