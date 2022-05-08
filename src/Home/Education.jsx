import useStyles from "../Theme/themes";
import cf_cert from '../Assets/images/cf_cert.png'
import cf_icon from '../Assets/images/cf.png'
import hr_logo from '../Assets/images/hr_logo.jpeg'
import hr_basic_js from '../Assets/images/hr_basic_js.png'
import wou_logo from '../Assets/images/wou_logo.png'
import wou_soccer from '../Assets/images/wou_soccer.jpg'
import usmc_logo from '../Assets/images/usmc_logo.jpg'
import uniform_pic from '../Assets/images/uniform_pic.jpg'
// import SkillSet from './SkillSet'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const relatedEd = [
  {
    icon: cf_icon, 
    certification:cf_cert, 
    graduation:'March 2022',
    name: 'CodeFellows',
    url: 'https://www.codefellows.org/',
    skill:'Full Stack JavaScript',
  },
  {
    icon: hr_logo, 
    certification:hr_basic_js, 
    graduation:'May 2022',
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/skills-verification',
    skill:'JavaScript(Basic)',
  },
]
const previousEd = [
  {
    icon: wou_logo, 
    certification: wou_soccer, 
    graduation: '',
    name: 'Wester Oregon University',
    url: 'https://wou.edu/',
    skill:'B.S. Education',
  },
  {
    icon: usmc_logo, 
    certification: uniform_pic, 
    graduation: '2015 to 2020',
    name: 'United States Marine Corps',
    url: 'https://www.marines.com/',
    skill:'Marine',
  },
]

// TODO: create class for Box parent and Card child items
// TODO: create dropdown of skills gained after a relatedEd/program/school

const Education = () => {
  
  const classes = useStyles();

  const renderRelatedEd = ( list ) => {
    return list.map(item => (
      <Card
        key={item.name}
        className={classes.relatedEducationCard}
        elevation={ 5 }
      >
          <CardHeader
            title={ item.name }
            subheader={`${item.skill}, ${item.graduation}`}
            avatar={
              <Avatar aria-label={item.name}>
                <img
                  alt="logo"
                  height="40"
                  onClick={()=> window.open(item.url)}
                  src={item.icon}
                />
              </Avatar>
            }
          />
          <CardMedia
            component="img"
            height="250"
            image={item.certification}
            alt="certification"
          />
        </Card>
    ))
  }
  const renderPreviousExp = ( list ) => {
    return list.map(item => (
        <Card
          key={ item.name }
          className={classes.previousExperienceCard}
          elevation={ 5 }
        >
          <CardHeader
            title={ item.name }
            subheader={`${item.skill}, ${item.graduation}`}
            avatar={
              <Avatar aria-label={item.name}>
                <img
                  alt="logo"
                  height="40"
                  onClick={()=> window.open(item.url)}
                  src={item.icon}
                />
              </Avatar>
            }
          />
          <CardMedia
            component="img"
            height="350"
            image={item.certification}
            alt="certification"
          />
        </Card>
    ))
  }

  return (
    <>
      <Box className={classes.educationContainer}>
        {/* <SkillSet/> */}
        { renderRelatedEd( relatedEd ) }
      </Box>
      <Box className={classes.educationPreviousContainer}>
        { renderPreviousExp( previousEd ) }
      </Box>
    </>
  );
}

export default Education;
