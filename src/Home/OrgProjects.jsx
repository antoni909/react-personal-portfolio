import { useState, useEffect } from 'react'
import { octokit } from '../Utils/gh';
// import { useGetOrgs } from '../Hooks/useGetOrgs'
import gh_logo from '../Assets/ghlogo.png'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// TODO: map over orgs to render Name, Members Name/Avatar, Description, url
// TODO: pass in repos_url for each organization and render the organization repo url in the GH Chip Component
// TODO: create class for Box parent and Card child items

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
            key={member.login}
            sizes='medium'
            alt={`profile of ${member.login}`}
            onClick={()=> window.open(member.html_url)}
            src={ member.avatar_url }
          />
      )
    })
    return ( avatarList )
  }

  const renderGHAvatar = (name) => {
    return (
      <Chip
        sx={{m:2}}
        avatar={
          <img
            alt="github repo"
            height="40"
            src={ gh_logo }
          />
        }
        label="GH Repo"
        onClick={()=> window.open(`https://github.com/${name}`)}
        variant="outlined"
      />
    )
  }

  useEffect( () => { 
    getOrgMembers(cpd)
    // console.log('orgData',orgData)
  },[])
  return (
      <Box
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          alignContent: 'space-around',  
          flexWrap: 'wrap', 
          flexDirection: 'row',
          justifyContent: 'space-around',
          p: 1,
          m: 1,
          // bgcolor: 'black',
          borderRadius: 5 
        }}
      >
          {list && list.map( org => ( 
            <Card
              key={org.orgRepos} 
              sx={{ 
                maxWidth: 340,
                display: 'flex', 
                alignItems: 'center',
                alignContent: 'space-around',  
                flexWrap: 'wrap', 
                flexDirection: 'row',
                justifyContent: 'space-around',
                p: 1,
                m: 1,
                borderRadius: 3  
              }}
            >
                <CardHeader
                  title={ org.orgName }
                />
                <CardMedia
                  component="img"
                  height="200"
                  image="https://via.placeholder.com/300"
                  alt="describe the snippet"
                />
                <CardContent>
                  <Stack 
                    direction="row" 
                    spacing={2}
                  >
                   Members &nbsp; { renderAvatars(org.membersList) }
                  </Stack>
                  <Stack 
                    direction="row" 
                    spacing={1}
                  >
                   {renderGHAvatar(org.orgName) }
                  </Stack>
                </CardContent>
            </Card>
          ))}
      </Box>
  );
}

export default OrgProjects;
