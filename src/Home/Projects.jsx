import { forwardRef } from 'react'
import OrgProjects from './OrgProjects'

// DONE: set-up GH API for use in this app
// DONE: each project will display all collaborators & clickable avatar 
// TODO: create a Search Feature that allows the user to search all repos

const Projects = forwardRef((props,orgProjectsRef) => {
  
  return (
    <div id="projects" ref={ orgProjectsRef }>
      <OrgProjects />
    </div>
  );
})

export default Projects;
