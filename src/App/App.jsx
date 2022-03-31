import React from 'react';
import Nav from '../Navigation/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../Home/About';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Nav/> } />
      <Route path="resume" element={ <Resume/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
