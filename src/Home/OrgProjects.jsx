import { useState, useEffect } from "react";
import { octokit } from "../Utils/gh";
import useStyles from "../Theme/themes";
import { useGetOrgs } from "../Hooks/useGetOrgs";
import gh_logo from "../Assets/images/ghlogo.png";
import cf_jeopardy from "../Assets/images/cf_jeopardy.jpeg";
import wellness_warriors from "../Assets/images/wellness_warriors.jpeg";
import basic_cms from "../Assets/images/basic_cms.jpeg";
import basic_messenger from "../Assets/images/basic-messenger.jpeg";
import i_care from "../Assets/images/i_care.jpeg";
import healthy_queue from "../Assets/images/healthy_queue.png";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";

// DONE: map over orgs to render Name, Members Name/Avatar, Description, url
// DONE: pass in repos_url for each organization and render the organization repo url in the GH Chip Component
// TODO: create class for Box parent and Card child items

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
          key={member.login}
          sizes="medium"
          alt={`profile of ${member.login}`}
          onClick={() => window.open(member.html_url)}
          src={member.avatar_url}
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
          label="GH Repo"
          onClick={() => window.open(`https://github.com/${name}`)}
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
          class={classes.groupProjectsImage}
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
      className={ classes.groupProjectsContainer } 
      gap={ 3 }
    >
      {list && list.map((org) => (
          <Card
            key={ org.orgRepos }
            className={ classes.groupProjectsCard }
            elevation={ 5 }
          >
            <CardHeader 
              title={ org.orgName }  
            />
            <Box
              className={classes.groupProjectsCardHeader}
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
  );
};

export default OrgProjects;
