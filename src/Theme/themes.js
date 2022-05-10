import { makeStyles } from "@material-ui/core";
import landing from "../Assets/images/landingII.jpg";
import resumeBck from "../Assets/images/resumeBackgroundTemp.jpg";
import githubWallpaper from "../Assets/images/githubWallpaper.jpg";

const useStyles = makeStyles((theme) => ({
  aboutContainer:{
    minHeight: "100vh",
    backgroundColor:'#f4f4f4', 
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
      transform:'scale(1.05)'
    },
  },
  clickToSoloProjectsContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'flex-end',
    margin:'50px 130px',
  },
  clickToSoloProjects:{
    color:'#30D5C8',
    backgroundColor:'transparent',
    border:'3px black solid',
    fontSize:'40px',
    "&:hover": {
      color:'black',
      backgroundColor: "transparent",
      transform:'scale(1.05)'
    },
  },
  educationContainer:{
    minHeight:'100vh',
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  educationTitleContainer:{
    maxWidth:'50%',
    margin: 'auto',
    marginLeft:'5%',
    minHeight:'0px',
    width: '50%',
    padding: '10px',
    overflow:'scroll'
  },
  educationTitle:{
    fontWeight:'bold',
    fontSize:'40px',
    textAlign:'left',
    lineHeight:'1.6em',
    maxWidth:'90%',
    paddingLeft:'7%',
  },
  educationParagraph:{
    fontSize:'20px',
    textAlign:'justify',
    maxWidth:'90%',
    paddingLeft:'7%',
  },
  educationSkillParagraph:{
    fontSize:'20px',
    textAlign:'justify',
    maxWidth:'90%',
    paddingLeft:'7%',
    flex:'1'
  },
  educationCertsContainer:{
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap:'10px'
  },
  educationPreviousContainer:{
    minHeight:'100vh',
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    p: 1,
    m: 1,
    bgcolor: 'red',
    borderRadius: 5 
  },
  ghBackground: {
    backgroundImage: `url(${githubWallpaper})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  groupProjectsMembersAvatars:{
    cursor:'pointer',
    '&:hover':{
      transform:'scale(1.4)'
    },
  },
  groupProjectsGHChip:{
    '&:hover':{
      transform:'scale(1.1)'
    },
  },
  groupProjectsContainer:{
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
    flexDirection: "column",
    borderRadius: 5,
    '&:hover':{
      backgroundColor:'#f4f4f4',
      transform:'scale(1.05)'
    },
  },
  groupProjectsCardHeader:{
    // border:'1px black solid',
    display: "flex",
    backgroundColor:'transparent',
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    margin:'10px',
    padding:'4px'
  },
  groupProjectsImage:{
    borderRadius:'5px'
  },
  groupProjectsImageContainer:{
    borderRadius: 5,
    margin:'10px',
  },
  hamburgerMenuContainer:{
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
  },
  hamburgerMenuIconOnHover:{
    '&:hover':{
      transform:'scale(1.15)'
    },
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
    gap:'3px',
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  landingTitle: {
    fontSize:'145px',
    fontWeight:'900',
    color: 'whitesmoke',
    marginBottom:'0px',
    padding:'0px'
  },
  landingSubTitle: {
    fontSize:'60px',
    fontWeight:'800',
    color: '#30D5C8',
    margin:'0px',
    padding:'0px'
  },
  navMenuContainer:{
    margin: '50px 25px', 
    position:'fixed', 
    zIndex:0
  },
  navIconMenu:{
    display: 'flex', 
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  navIconOnHover:{
    '&:hover':{
      transform:'scale(1.25)'
    },
  },
  navHamburgerMenuIcon:{
    '&:hover':{
      transform:'scale(1.25)'
    },
  },
  orgProjectsContainer:{
    minHeight: '100vh',
  },
  previousExperienceCard:{
    maxWidth: 560,
    display: 'flex', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 3,
    '&:hover':{
      backgroundColor:'#f4f4f4',
      transform:'scale(1.05)'
    },
  },
  relatedEducationCard:{
    maxWidth: 340,
    border:'3px black solid',
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 3,
    '&:hover':{
      backgroundColor:'#f4f4f4',
      transform:'scale(1.05)'
    },
    padding:'5px 5px'
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
    color:'#30D5C8',
    position: "fixed",
    fontSize: 60,
    bottom: 20,
    right: 20,
    zIndex: 1,
    '&:hover':{
      transform:'scale(1.3)'
    },
  },
  soloProjectsLandingContainer:{
    backgroundImage: `url(${ githubWallpaper })`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    height: "100vh",
    borderRadius: '4px',
    display: 'flex', 
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  soloProjectsLandingCard:{
    maxWidth: 500,
    marginLeft: '33%', 
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  soloProjectsReposContainer:{
    backgroundColor: 'black',
    display: 'flex', 
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  soloProjectsReposCard:{
    maxWidth: 340, 
    minWidth: 340, 
    minHeight: 250,
    maxHeight: 250,
    p: 1,
    m: 1,
    '&:hover':{
      transform:'scale(1.1)'
    }, 
  },
  soloProjectsReposCardFlex:{
    display:'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  toHomeButton: {
    color:'#30D5C8',
    bottom: 20,
    fontSize: 60,
    marginBottom: 70,
    position: "fixed",
    right: 20,
    zIndex: 1,
    '&:hover':{
      transform:'scale(1.3)'
    },
  },
}));
export default useStyles;
