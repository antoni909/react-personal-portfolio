import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import About from './Resume'
import Awards from './Awards'
import LetsTalk from './LetsTalk'
import Home from './Home'
import NavBar from './NavBar'
import WhyMe from './WhyMe'

const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
      <Route path="/resume">
        <About />     
      </Route>
      <Route path="/why-me">
        <WhyMe />
      </Route>
      <Route path="/awards">
        <Awards />
      </Route>
      <Route path="/lets-talk">
        <LetsTalk />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
