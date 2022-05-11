import { makeStyles } from "@material-ui/core";
import resumeBck from "../Assets/images/resumeBackgroundTemp.jpg";
import aboutBackgroundImage from "../Assets/images/aboutBackgroundImage.jpg"
import githubWallpaper from "../Assets/images/githubWallpaper.jpg";
const useStyles = makeStyles((theme) => ({
  aboutBackground:{
    backgroundImage:`url(${ aboutBackgroundImage })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  aboutContainer:{
    minHeight: "100vh",
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',  
    flexDirection: 'column',
    justifyContent: 'center',
  },
  aboutCard:{
    maxWidth: '750px',
    minWidth:'100px',
    maxHeight:'400px',
    marginTop:'0px',
    overflow:'scroll',
  },
  aboutTitle:{
    color: '#30D5C8',
    fontSize:'200px',
    fontWeight:'900',
    margin:'0px',
    padding:'0px'
  },
  aboutCardParagraph:{
    fontSize:'20px',
    fontWeight:'bold',
    textAlign:'justify',
    lineHeight:'1.8'
  },
  aboutQuote:{
    fontSize:'20px',
    color:'#30D5C8'
  },
  aboutQuoteContainer:{
    textJustify:'auto',
    lineHeight:'1.2',
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
  educationCertsContainer:{
  display: 'flex', 
  alignItems: 'center',
  alignContent: 'space-around',  
  flexWrap: 'wrap', 
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap:'10px'
  },
  educationContainer:{
    minHeight:'100vh',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  educationTitleContainer:{
    maxWidth:'50%',
    margin: 'auto',
    marginLeft:'5%',
    minHeight:'0px',
    height:'600px',
    width: '50%',
    padding: '10px',
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
    maxHeigh:'1px',
    paddingLeft:'7%',
  },
  educationPreviousContainer:{
    minHeight:'100vh',
    background:'rgb(3 3 5)',
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around', 
  },
  educationPreviousTitleContainer:{
    color:'whitesmoke',
    maxWidth:'50%',
    margin: 'auto',
    marginLeft:'5%',
    minHeight:'0px',
    height:'600px',
    width: '50%',
    padding: '10px',
  },
  footerBackgroundImage:{
    background:'black',
    color:'whitesmoke'
  },
  footer:{
    minHeight:'66vh',
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
    background: 'linear-gradient(to right, #000428, #004e92)',
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
    justifyContent:'center'
  },
  landingVerticalLine:{
    borderLeft: '3px solid white',
    borderImage:'linear-gradient(to bottom, #30D5C8,rgba(0, 0, 0, 0)) 1 100%',
    height: '40vh',
    marginTop:'0px'
  },
  landingTitle: {
    color: '#30D5C8',
    fontSize:'145px',
    fontWeight:'900',
    marginBottom:'0px',
    maxWidth:'90vw',
    padding:'0px'
  },
  landingSubTitle: {
    color: '#30D5C8',
    fontSize:'90px',
    fontWeight:'800',
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
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 3,
    '&:hover':{
      backgroundColor:'#f4f4f4',
      transform:'scale(1.01)'
    },
    padding:'5px 5px',
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
