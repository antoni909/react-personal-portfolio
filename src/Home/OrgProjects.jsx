import { useState, useEffect } from 'react'
// import { useOctokit } from '../Hooks/useOctokit'
import { octokit } from '../Utils/gh';
// import { useGetOrgs } from '../Hooks/useGetOrgs'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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

  // const { data } = useOctokit(`/orgs/${'Team-Meow'}/members`)
  // const { orgData } = useGetOrgs('/user/orgs')

  const getOrgMembers = async (obj) => {
    let res, tempList
    for( let [key,value] of Object.entries(obj)){
      res = await octokit.request(`/orgs/${value.orgName}/members`, {org: 'org'})
      obj[key] = { ...value, membersList:[ ...res.data ] }
    }
    tempList = [...Object.values(obj)]
    return setList([...tempList])
  }

  const renderAvatars = (list) => {
    const avatarList = list.map( member => {
      return (
          <Avatar
            sizes='medium'
            alt={`profile of ${member.login}`}
            onClick={()=> window.open(member.html_url)}
            src={ member.avatar_url }
          />
      )
    })
    return ( avatarList )
  }

  useEffect( () => { 
    getOrgMembers(cpd)
  },[])

  return (

      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {list && list.map( org => ( 
            <Grid 
              key={org.orgRepos} 
              item 
              xs={4}
            >
              <Card
                sx={{ maxWidth: 340 }}
              >
                <CardHeader
                  title={ org.orgName }
                />
                <CardMedia
                  component="img"
                  height="150"
                  image="https://via.placeholder.com/150"
                  alt="describe the snippet"
                />
                <CardContent>
                  <Stack 
                    direction="row" 
                    spacing={2}
                  >
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                  >
                    Collaborators
                  </Typography>
                   { renderAvatars(org.membersList) }
                </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

  );
}

export default OrgProjects;
