import cf_cert from '../Assets/cf_cert.png'
import cf_icon from '../Assets/cf.png'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const relatedEd = [
  {
    icon: cf_icon, certification:cf_cert, 
    graduation:'March 2022',
    name: 'CodeFellows',
    url: 'https://www.codefellows.org/',
    skill:'Full Stack JavaScript',
  },
]
// TODO: create class for Box parent and Card child items
// TODO: create dropdown of skills gained after a relatedEd/program/school

const Education = () => {
  const renderRelatedEd = ( list ) => {
    return list.map(item => (
        <Card
        key={item.name}
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

  return (
    <>
      <h1>Education</h1>
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
        { renderRelatedEd( relatedEd ) }
      </Box>
    </>

  );
}

export default Education;
