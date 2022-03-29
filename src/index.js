import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import Nav from './Nav';
import Resume from './Resume';
import Contact from './Contact';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={ <React.StrictMode><App /></React.StrictMode>}
      />
      <Route path="about" element={ <About/> } />
      <Route path="resume" element={ <Resume/> } />
      <Route path="contact" element={ <Contact/> } />
    </Routes>

  </BrowserRouter>,
  rootElement
);
