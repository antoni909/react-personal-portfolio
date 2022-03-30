import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';

function Routing() {
  return (
    <div>
      <h1>Routing Component</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="resume" element={ <Resume/> } />
          <Route path="contact" element={ <Contact/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
