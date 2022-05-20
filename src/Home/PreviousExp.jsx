import { forwardRef } from 'react'
import useStyles from "../Theme/themes";

import uniform_pic from '../Assets/images/uniform_pic.jpg'
import usmc_logo from '../Assets/images/usmc_logo.jpg'
import wou_logo from '../Assets/images/wou_logo.png'
import wou_soccer from '../Assets/images/wou_soccer.jpg'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Carousel from 'react-bootstrap/Carousel';

const previousEd = [
  {
    icon: wou_logo, 
    certification: wou_soccer, 
    graduation: '2008 to ',
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
  }
]

const PreviousExp = forwardRef((props,previousExpRef) => {

  const classes = useStyles();
  const renderPreviousExp = ( list ) => {
    return (
      <div className={classes.educationPrevCarouselContainer}>
        <Carousel
          className={classes.educationPrevExpCarousel}
          interval={null}
        > 
          {list.map(item =>(
            <Carousel.Item
              key={ item.name }
            >
                <Card
                  className={classes.educationPreviousExpCard}
                  key={ item.name }
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
                  <img
                    className="d-block w-100"
                    src={ item.certification }
                    alt={`${item.certification} certification`}
                  />
                </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }

  return(
    <div id="previouse experience" ref={ previousExpRef }>
      <Box className={classes.educationPreviousExpContainer}>
        <div className={classes.educationPreviousTitleContainer}>
          <h2 className={classes.educationPrevTitle}>
            See into my Past Experience
          </h2>
          <p className={classes.educationPrevParagraph}> My sights are locked-in on cultivating a growth mindset and continue growing as professional Web Developer.</p>
        </div>
        { renderPreviousExp( previousEd ) }
      </Box>
    </div>

  )
})

export default PreviousExp
