import { makeStyles } from '@material-ui/core'
import landing from '../Assets/landing.jpg'

export const useStyles = makeStyles( theme => ({
  button: {
    fontSize: 25,
    width: 11,
    borderRadius: 10,
    boxShadow: '1px 1px 1px 1px rgba(30, 203, 243, .3)',
    '&:hover':{
      backgroundColor: '#f50057'
    },
    marginTop: '10px', 
  },
  landingBackground: {
    height: 1356,
    backgroundImage: `url(${landing})`,
  },
  root: {
    flexGrow: 1,
  },
}
));
