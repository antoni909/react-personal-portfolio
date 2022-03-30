import React from 'react';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Nav/> } />
      <Route path="about" element={ <About/> } />
      <Route path="resume" element={ <Resume/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
