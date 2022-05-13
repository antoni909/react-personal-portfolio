import basic_cms from "../Assets/images/basic_cms.jpeg";
import basic_messenger from "../Assets/images/basic-messenger.jpeg";

import cf_jeopardy from "../Assets/images/cf_jeopardy.jpeg";
import healthy_queue from "../Assets/images/healthy_queue.png";
import gh_logo from "../Assets/images/ghlogo.png";
import i_care from "../Assets/images/i_care.jpeg";
import { octokit } from "../Utils/gh";
import { useGetOrgs } from "../Hooks/useGetOrgs";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import useStyles from "../Theme/themes";
import wellness_warriors from "../Assets/images/wellness_warriors.jpeg";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";

// DONE: map over orgs to render Name, Members Name/Avatar, Description, url
// DONE: pass in repos_url for each organization and render the organization repo url in the GH Chip Component
// DONE: create class for Box parent and Card child items

// dummy data
// eslint-disable-next-line no-unused-vars
const cpd = {
  Team_Meow: {
    orgName: "Team-Meow",
    orgRepos: "https://api.github.com/orgs/Team-Meow/repos",
  },
  Wellness_Warriors: {
    orgName: "Wellness-Warriors",
    orgRepos: "https://api.github.com/orgs/Wellness-Warriors/repos",
  },
  basic_cms: {
    orgName: "basic-cms",
    orgRepos: "https://api.github.com/orgs/basic-cms/repos",
  },
  basic_messenger: {
    orgName: "basic-messenger",
    orgRepos: "https://api.github.com/orgs/basic-messenger/repos",
  },
  doc_devs: {
    orgName: "doc-devs",
    orgRepos: "https://api.github.com/orgs/doc-devs/repos",
  },
  healthy_queue: {
    orgName: "healthy-queue",
    orgRepos: "https://api.github.com/orgs/healthy-queue/repos",
  },
};

const OrgProjects = () => {
  const navigate = useNavigate()
  const classes = useStyles();
  const [list, setList] = useState([]);
  const { orgData } = useGetOrgs("/user/orgs");

  const getOrgMembers = async (obj) => {
    let res, tempList;
    for (let [key, value] of Object.entries(obj)) {
      res = await octokit.request(`/orgs/${value.orgName}/members`, {
        org: "org",
      });
      obj[key] = { ...value, membersList: [...res.data] };
    }
    tempList = [...Object.values(obj)];
    return setList([...tempList]);
  };

  const renderAvatars = (list) => {
    const avatarList = list.map((member) => {
      return (
        <Avatar
          key={ member.login }
          className={ classes.groupProjectsMembersAvatars }
          sizes="medium"
          alt={`profile of ${ member.login }`}
          onClick={ () => window.open(member.html_url) }
          src={ member.avatar_url }
        />
      );
    });
    return avatarList;
  };

  const renderGHAvatar = (name) => {
    return (
      <Chip
        avatar={
          <img 
            alt="github repo" 
            src={ gh_logo } 
            />
          }
        className={ classes.groupProjectsGHChip }
        label="GH Repo"
        onClick={ () => window.open(`https://github.com/${ name }`) }
        variant="outlined"
      />
    );
  };

  const placeHolderImage = (orgName) => {
    let snippetObject = {
      "Team-Meow": cf_jeopardy,
      "Wellness-Warriors": wellness_warriors,
      "basic-cms": basic_cms,
      "basic-messenger": basic_messenger,
      "doc-devs": i_care,
      "healthy-queue": healthy_queue,
    };
    return (
        <img
          className={ classes.groupProjectsImage }
          width={ 540 }  
          height={ 340 } 
          src={ snippetObject[orgName].match(/([/])/)
              ? snippetObject[orgName]
              : 'https://via.placeholder.com/340'
          } 
          alt={ `${orgName} project placeholder` } 
        />
    );
  };

  useEffect(() => {
    getOrgMembers(orgData);
  }, [orgData]);
  
  return (
    <Box
      className={ classes.orgProjectsContainer }
    >
      <div className={ classes.orgProjectTitleContainer }>
        <h1 className={ classes.orgProjectsTitle }> See what I have built with other developers! </h1>
      </div>
      <Box 
        className={ classes.groupProjectsContainer } 
        gap={ 3 }
      >
        {list && list.map((org) => (
            <Card
              key={ org.orgRepos }
              className={ classes.groupProjectsCard }
              elevation={ 5 }
            >
              <CardHeader title={ org.orgName }/>
              <Box
                className={ classes.groupProjectsCardHeader }
                gap={ 1 }
              >
                  { renderGHAvatar(org.orgName) }
                  { renderAvatars(org.membersList) }
              </Box>
              <Box className={classes.groupProjectsImageContainer}
              >{ placeHolderImage(org.orgName) }
              </Box>
            </Card>
        ))}
      </Box>
      <Box
        className={classes.clickToSoloProjectsContainer}
      >
        <Button
          className={classes.clickToSoloProjects}
          onClick={ () => navigate('/solo_projects')}
        >See All GH Projects 
        </Button>
      </Box>
    </Box>
  );
};

export default OrgProjects;
