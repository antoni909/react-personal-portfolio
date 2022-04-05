// import {useOctokit} from '../Hooks/useOctokit'

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// // import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

// const SoloProjects = () => {
//   // const { data, isPending, error } = useOctokit(`/users/${process.env.REACT_APP_USER}/repos?per_page=45&sort=updated`)
//   const { data, isPending, error } = useOctokit(`/use/${process.env.REACT_APP_USER}/repos?per_page=45&sort=updated`)
//   // console.log('data',data)

//   // PROPERTIES: name, description, private or visibility, homepage

//   const mapData = (repos, pending,err) => {
//     if(!data) return <>No Data</>
//     else{
//       return(
//         <>
//           <Box sx={{flexGrow: 1}}>
//             <Grid container spacing={1}>
//                 {data && data.map( repo => (
//                   <Grid 
//                     key={repo.name} 
//                     item 
//                     xs={4}
//                   >
//                     <Card
//                       sx={{ maxWidth: 340 }}
//                     >
//                       <CardHeader
//                         title={repo.name}
//                         // subheader={repo.description}
//                       />
//                       {/* <CardMedia
//                         component="img"
//                         height="340"
//                         image="https://via.placeholder.com/150"
//                         alt="describe the snippet"
//                       /> */}
//                       <CardContent>
//                         <Typography variant="body2" color="text.secondary">
//                           {repo.description} 
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Grid>
//                 ))}
//             </Grid>
//           </Box>

//         </>
//       )
//     }
//   }

//   return (<> { mapData(data, isPending, error) } </>);
// }

// export default SoloProjects;
