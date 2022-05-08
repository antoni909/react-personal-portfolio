import { makeStyles } from "@material-ui/core";
import landing from "../Assets/images/landingII.jpg";
import resumeBck from "../Assets/images/resumeBackgroundTemp.jpg";
import githubWallpaper from "../Assets/images/githubWallpaper.jpg";

const useStyles = makeStyles((theme) => ({
  aboutContainer:{
    minHeight: "100vh",
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',  
    flexDirection: 'row',
    justifyContent: 'center',
  },
  aboutCard:{
    maxWidth: 500, 
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  button: {
    fontSize: 25,
    width: 15,
    boxShadow: "1px 1px 1px 1px rgba(30, 203, 243, .3)",
    "&:hover": {
      backgroundColor: "#f50057",
    },
  },
  ghBackground: {
    backgroundImage: `url(${githubWallpaper})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  groupProjectsContainer:{
    minHeight: "100vh", 
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    p: 1,
    m: 1,
    bgcolor: 'black',
    borderRadius: 2
  },
  groupProjectsCard:{
    maxWidth: 1050,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    borderRadius: 3,
  },
  groupProjectsImage:{
    borderRadius:'5px'
  },
  landingBackground: {
    backgroundImage: `url(${landing})`,
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  landingContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  landingCard: {
    // border: "3px red solid",
    maxWidth: 700,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  landingCardTitles: {
    fontSize:'80px',
    fontWeight: 'bolder',
    color:'white',
  },
  resumeBackground: {
    backgroundImage: `url(${resumeBck})`,
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  root: {
    flexGrow: 1,
  },
  scrollButton: {
    position: "fixed",
    fontSize: 60,
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  toHomeButton: {
    bottom: 20,
    fontSize: 60,
    marginBottom: 70,
    position: "fixed",
    right: 20,
    zIndex: 1,
  },
}));
export default useStyles;
