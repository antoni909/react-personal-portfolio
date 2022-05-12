import React from 'react';
import Nav from '../Navigation/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import SoloProjects from '../Home/SoloProjects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Nav/> } />
        <Route path="resume" element={ <Resume/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="solo_projects" element={ <SoloProjects/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
