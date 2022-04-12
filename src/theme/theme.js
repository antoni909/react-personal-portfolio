import { makeStyles } from '@material-ui/core'
import landing from '../Assets/landingII.jpg'
import githubWallpaper from '../Assets/githubWallpaper.jpg'

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
  scrollButton: {
    position: 'fixed',
    fontSize: 60,
    bottom: 20,
    right: 20,
    zIndex: 1
  },
  toHomeButton: {
    bottom: 20,
    fontSize: 60,
    marginBottom: 70,
    position: 'fixed',
    right: 20,
    zIndex: 1
  },
  landingBackground: {
    backgroundImage: `url(${landing})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  ghBackground: {
    backgroundImage: `url(${githubWallpaper})`,
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
    height: "60vh",
  },
  root: {
    flexGrow: 1,
  },
}
));
