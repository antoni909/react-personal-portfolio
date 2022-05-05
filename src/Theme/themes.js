import { makeStyles } from '@material-ui/core'
import landing from '../Assets/images/landingII.jpg'
import resumeBck from '../Assets/images/resumeBackgroundTemp.jpg'
import githubWallpaper from '../Assets/images/githubWallpaper.jpg'

 const useStyles = makeStyles( theme => ({
  button: {
    fontSize: 25,
    width: 15,
    boxShadow: '1px 1px 1px 1px rgba(30, 203, 243, .3)',
    '&:hover':{
      backgroundColor: '#f50057'
    }, 
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
  resumeBackground: {
    backgroundImage: `url(${resumeBck})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  ghBackground: {
    backgroundImage: `url(${ githubWallpaper })`,
    backgroundSize: "contain",
    backgroundRepeat: 'no-repeat',
  },
  root: {
    flexGrow: 1,
  },
}));
export default useStyles
