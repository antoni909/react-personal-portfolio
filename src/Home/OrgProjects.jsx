import { useState, useEffect } from 'react'
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
  const [ orgObj, setOrgObj ] = useState({})

  // const { data } = useOctokit(`/orgs/${'Team-Meow'}/members`)
  // const { orgData } = useGetOrgs('/user/orgs')
  
  const getOrgMembers = async (obj) => {
    let res
    for(const [key,value] of Object.entries(obj)){
      res = await octokit.request(`/orgs/${value.orgName}/members`, {org: 'org'})
      const membersList = res.data
      obj[key] = {...obj[key],membersList: [...membersList]}
    }
    setOrgObj({...obj})
    if(orgObj)createOrgList(orgObj)
  }

  const createOrgList = (obj) => Object.entries(obj).forEach(([key, value]) => setList([...list,value]))
  
  useEffect( () => {

      if(cpd)getOrgMembers(cpd) 

  },[])
  
  console.log(list && list.map(org => console.log(org)))
  
  return (
    <>

      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {/* {data && data.map( repo => ( */}
                   <Grid 
                    //  key={repo.name} 
                     item 
                     xs={4}
                   >
                     <Card
                       sx={{ maxWidth: 340 }}
                     >
                       <CardHeader
                        //  title={repo.name}
                        //  subheader={repo.description}
                       />
                       {/* <CardMedia
                         component="img"
                         height="340"
                         image="https://via.placeholder.com/150"
                         alt="describe the snippet"
                       /> */}
                       <CardContent>
                         <Typography variant="body2" color="text.secondary">
                           {/* {repo.description}  */}
                         </Typography>
                       </CardContent>
                     </Card>
                   </Grid>
              // ))}
        </Grid>
      </Box>

    </>

  );
}

export default OrgProjects;
