import SoloProjects from './SoloProjects'
import OrgProjects from './OrgProjects'

// TODO: set-up GH API for use in this app
// await octokit.request('GET /user/repos')
// TODO: each project will display all collaborators & clickable avatar 
// TODO: create a Search Feature that allows the user to search all repos

const Projects = () => {
  
  return (
    <>
      <h1>Group Projects</h1>
      <OrgProjects />
      
      <h1>Solo Projects</h1>
      <SoloProjects />
    </>
  );
}

export default Projects;
