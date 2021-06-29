import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experience from './components/pages/experience/Experience';
import Project from './components/pages/project/Project';
import Education from './components/pages/education/Education';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/project" component={Project} />
          <Route path="/education" component={Education} />
        </Switch>
      </>
    </Router>
  );
}

export default App;