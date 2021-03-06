import { useState, forwardRef } from 'react'
import useStyles from "../Theme/themes";
import cf_cert from '../Assets/certs/cf_cert.png'
import cf_icon from '../Assets/images/cf.png'
import courseraUX_cert  from "../Assets/certs/courseraUX_cert.jpg";
import gt_logo  from "../Assets/logos/gt_logo.jpg";
import sololearn_logo  from "../Assets/logos/sololearn_logo.png";
import hr_basic_js from '../Assets/certs/hr_basic_js.png'
import soloLearn_CSS from '../Assets/certs/soloLearn_CSS.jpg'
import hr_logo from '../Assets/images/hr_logo.jpeg'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

// DONE: create class for Box parent and Card child items
// DONE: create show skills on hover of certificate
// DONE: popup text overflows into next component when hover over CF cert
// TODO: create move renderPreviousExp and renderRelatedEd into their own components PreviousExp and RelatedEducation, as children of education component

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
  {
    icon: gt_logo, 
    certification: courseraUX_cert, 
    graduation:'May 2022',
    name: 'Georgia Institute of Technology',
    url: 'https://coursera.org/share/86c73e8888cb89d07e40c59aef472d06',
    skill:'UX Design',
  },
  {
    icon: sololearn_logo, 
    certification: soloLearn_CSS, 
    graduation:'May 2022',
    name: 'sololearn',
    url: 'https://www.sololearn.com/',
    skill:'CSS',
  },
]

const RelatedEducation = forwardRef((props,relatedEdRef) => {
  const classes = useStyles();

  const [renderSkill, setRenderSkill] = useState(false)

  const renderSkills = (targetSkill) => {
    const hackerRank = 'JavaScript Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.'
    const georgiaTech = 'Usability User Experience (UX), User Experience Design (UXD), User Interface'
    const codeFellows = 'Git, GitHub, Node.js, ESLint, Heroku, React, Redux Toolkit, Jest,Redux, React-Native, Socket.IO, Express JSAdvanced Server-Side and Client-Side JavaScript React and component frameworks Advanced HTML, CSS, Data Structures and Algorithms,Cloud integration and deployments with AWS tools like S3, Lambda '
    const sololearn = 'CSS3 basics,properties, position and layout, working with text,  gradients and backgrounds, transitions and transforms, css filters'
    const skillsObj = {
      'HackerRank': hackerRank,
      'CodeFellows': codeFellows,
      'Georgia Institute of Technology': georgiaTech,
      'sololearn': sololearn,
    }
    setRenderSkill(
      <p className={classes.educationSkillParagraph}>
        {skillsObj[targetSkill]}
      </p>
    )
  }

  const renderRelatedEd = ( list ) => {

    return list.map(item => (
      <Card
        key={item.name}
        className={classes.relatedEducationCard}
        elevation={ 5 }
        onMouseEnter={()=> renderSkills(item.name)}
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

  return(
    <div 
      id="relatedEduc" 
      ref={ relatedEdRef 
    }>
      <Box className={classes.educationContainer}>
        <Box className={classes.educationCertsContainer}>
          { renderRelatedEd( relatedEd ) }
        </Box>
        <div className={classes.educationTitleContainer}>
          <h2 className={classes.educationTitle}>
            I have aquired skills in Web Development
          </h2>
          <p className={classes.educationParagraph}> My sights are locked-in on cultivating a growth mindset and continue growing as professional Web Developer.</p>
          <p className={classes.educationParagraph}>Psst... hover to see the skills I have attained</p>
          {renderSkill}
        </div>
      </Box>
    </div>

  )
})

export default RelatedEducation
