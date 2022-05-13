import { makeStyles } from "@material-ui/core";
import resumeBck from "../Assets/images/resumeBackgroundTemp.jpg";
import aboutBackgroundImage from "../Assets/images/aboutBackgroundImage.jpg"
import githubWallpaper from "../Assets/images/githubWallpaper.jpg";
import prevExpBackground from "../Assets/images/prevExperienceBackground.jpg";
import contactBackground from "../Assets/images/contactBackground.jpg";

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
    fontSize:'40px',
    "&:hover": {
      color:'black',
      backgroundColor: "transparent",
      transform:'scale(1.05)'
    },
  },
  contactBackground:{
    backgroundImage:`url(${ contactBackground })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  contactContainer:{
    minHeight: "100vh",
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',  
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contactTitle:{
    color:'#30D5C8',
    fontWeight:'900',
    fontSize:'70px',
    marginBottom:'50px'
  },
  educationCertsContainer:{
  display: 'flex', 
  alignItems: 'center',
  alignContent: 'space-around',  
  flexWrap: 'wrap', 
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap:'10px',
  },
  educationContainer:{
    minHeight:'100vh',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    overflow:'scroll',
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
    color:'#30D5C8',
    fontWeight:'900',
    fontSize:'60px',
    textAlign:'left',
    lineHeight:'1.3em',
  },
  educationParagraph:{
    color:'black',
    fontSize:'20px',
    textAlign:'justify',
    lineHeight:'1.8em',
    maxWidth:'90%',
  },
  educationPrevExpCarousel:{
    borderRadius:'7px',
    maxHeight:'700px',
  },
  educationPrevCarouselContainer:{
    width:'700px',
    height:'400px',
    overflow:'scroll',
    marginRight:'5%',
  },
  educationPrevTitle:{
    color:'#30D5C8',
    fontWeight:'900',
    fontSize:'60px',
    textAlign:'left',
    lineHeight:'1.3',
  },
  educationPrevParagraph:{
    color:'black',
    fontSize:'20px',
    textAlign:'justify',
  },
  educationPreviousExpCard:{
    backgroundColor:'white',
    maxWidth: 660,
    display: 'flex', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 3,
  },
  educationPreviousExpContainer:{
    minHeight:'100vh',
    background:`url(${prevExpBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexDirection: 'row',
  },
  educationPreviousTitleContainer:{
    maxWidth:'50%',
    margin:' 0% 10%',
    width: '50%',
    padding: '10px',
  },
  educationSkillParagraph:{
    fontSize:'20px',
    textAlign:'justify',
    maxWidth:'90%',
  },
  footerContainer:{
    minHeight:'66.6vh',
    background:'linear-gradient(to left, #000928, #004e92)',
    display: 'flex', 
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  footerParagraphContainer:{
    textAlign:'center'
  },
  footerParagraph:{
    color:'#30D5C8',
    fontSize:'40px',
    fontWeight:'300'
  },
  footerVerticalLine:{
    borderLeft: '3px solid white',
    borderImage:'linear-gradient(to top, #30D5C8,rgba(0, 0, 0, 0)) 1 100%',
    height: '30vh',
  },
  formButton:{
    backgroundColor:'green',
    color:'white',
    borderRadius:'3px',
    fontSize: 20,
    '&:hover':{
      backgroundColor:'black'
    },
  },
  formButtonContainer:{
    display:'flex',
    alignItems: 'center',
    alignContent: 'center',  
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop:'50px',
    gap:'20px',
  },
  formContainer:{
    width:'550px',
    height:'750px',
    display:'flex',
    alignItems: 'center',
    alignContent: 'center',  
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  },
  formGroup:{
    display:'flex',
    alignItems: 'center',
    alignContent: 'center',  
    justifyContent: 'center',
    flexDirection: 'column',
    gap:'50px',
  },
  formSentMessage:{
    color:'#30D5C8',
    fontSize:'20px',
    fontWeight:'700',
    width:'80%'
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
    background:'linear-gradient(to right, #000428, #004e92)',
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
    justifyContent:'center',
    textAlign:'center'
  },
  landingVerticalLine:{
    borderLeft: '3px solid white',
    borderImage:'linear-gradient(to bottom, #30D5C8,rgba(0, 0, 0, 0)) 1 100%',
    height: '40vh',
    marginTop:'0px'
  },
  landingTitle: {
    color: '#30D5C8',
    fontSize:'155px',
    fontWeight:'900',
  },
  landingTitleContainer:{
    margin:'0 15%',
  },
  landingSubTitle: {
    color: '#30D5C8',
    fontSize:'90px',
    fontWeight:'800',
  },
  navMenuContainer:{
    margin: '50px 25px', 
    position:'fixed', 
    zIndex:100
  },
  navIconMenu:{
    display: 'flex', 
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', 
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  navHamburgerMenuIcon:{
    '&:hover':{
      transform:'scale(1.25)'
    },
  },
  orgProjectsContainer:{
    minHeight: '100vh',
  },
  orgProjectTitleContainer:{
    textAlign:'center',
    margin:'50px 15%'
  },
  orgProjectsTitle:{
    color:'#30D5C8',
    fontWeight:'900',
    fontSize:'70px',
  },
  relatedEducationCard:{
    borderRadius: 3,
    display: 'flex', 
    alignItems: 'center',
    alignContent: 'space-around',  
    flexWrap: 'wrap', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    '&:hover':{
      backgroundColor:'#f4f4f4',
      transform:'scale(1.01)'
    },
    maxWidth: 340,
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
  socialIconOnHover:{
    '&:hover':{
      transform:'scale(1.5)'
    },
  },
  socialIconsList:{
    display: 'flex', 
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'center',
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
