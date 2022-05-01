import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const WhyMe = () => {
  return (

      <Card 
        sx={{
          maxWidth: 700,
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
        >
        <Typography
          color="black"
          variant='subtitle1'
          component="div"
          fontSize={ 25 }
          gutterBottom 
        >
          My greatest aspiration is to become a professional in the Tech Industry as a Web Developer. 
        </Typography>
        <Typography
          color="black"
          variant='subtitle1'
          component="div"
          fontSize={ 25 }
          gutterBottom 
        >
          I continue to grow by being adaptive and malleable to new concepts and paradigms. 
          My willingness to work in a team is paramount to my conceptual knowledge and growth. 
        </Typography>
        <Typography
          color="black"
          variant='subtitle1'
          component="div"
          fontSize={ 25 }
          gutterBottom 
        > 
          I want to be an effective and approachable developer that is always willing to teach those around me.
        </Typography>
      </Card>

  );
}

export default WhyMe;
