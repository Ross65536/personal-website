import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// check if bootstrap JS necessary: https://getbootstrap.com/docs/3.4/javascript/
// import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.scss';
import './header.scss';
import './footer.scss';

import CONSTANTS from './constants.js';
import About from './pages/about.js'
import Projects from './pages/projects.js'
import Resume from './pages/resume.js'
import Anchor, { ICONS } from './components/anchor.js';

const NAME = CONSTANTS.name;
const PROFESSION = "Software Engineer";
const GITHUB_URL = "https://github.com/Ross65536";
const LINKEDIN_URL = "https://www.linkedin.com/in/rostyslav-khoptiy/";
const ANDROID_PLAY_STORE = "https://play.google.com/store/apps/developer?id=Ros+Software";
const EMAIL = "rk65536@protonmail.com";

const PROFILE_PIC_URL = process.env.PUBLIC_URL + '/profile.jpeg';

function App() {
  return (
    <div className="App" id="main">
      <Router>

        {/* HEADER */}
        <header id="header">
          <img src={PROFILE_PIC_URL}/>
          <h1 id="name">
            <Link to="./">{NAME}</Link>
          </h1>
          <h3 id="profession">
            {PROFESSION}
          </h3>
          <nav id="top-bar">
            <ul>
              <li><Link to='./'>Projects</Link></li>
              <li><Link to="resume">Resume</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </nav>
        </header>

        {/* BODY */}
        <div id="page-content">
          <Switch>
            <Route path='*/about' >
              <About />
            </Route>
            <Route path='*/resume'>
              <Resume />
            </Route>
            <Route exact path="*/">
              <Projects />
            </Route>
          </Switch>
        </div>

        {/* FOOTER */}
        <footer id="footer">
          <ul>
            <li><Anchor name="Github" url={GITHUB_URL} icon={ICONS.github} /></li>
            <li><Anchor name="LinkedIn" url={LINKEDIN_URL} icon={ICONS.linkedin}/></li>
            <li><Anchor name="E-Mail" url={"mailto:" + EMAIL} icon={ICONS.email}/></li>
            <li><Anchor name="Android Store" url={ANDROID_PLAY_STORE} icon={ICONS.android_store}/></li>
          </ul>
        </footer>

      </Router>
    </div>
  );
}

export default App;
