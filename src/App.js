import './App.scss';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './pages/about.js'
import Projects from './pages/projects.js'
import Resume from './pages/resume.js'

const NAME = "Rostyslav Khoptiy"
const PROFESSION = "Software Engineer"
const GITHUB_URL = "https://github.com/Ross65536"
const LINKEDIN_URL = "https://www.linkedin.com/in/rostyslav-khoptiy/";
const ANDROID_PLAY_STORE = "https://play.google.com/store/apps/developer?id=Ros+Software";
const EMAIL = "rk65536@protonmail.com"

function App() {
  return (
    <div className="App" id="main">
      <Router>

        {/* HEADER */}
        <header id="header">
          <h1 id="name">
            <Link to="/">{NAME}</Link>
          </h1>
          <h3 id="profession">
            {PROFESSION}
          </h3>
          <nav id="top-bar">
            <ul>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        {/* BODY */}
        <div id="page-content">
          <Switch>
            <Route exact path="/">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>

        {/* FOOTER */}
        <footer id="footer">
          <ul>
          <li><a href={GITHUB_URL}><i class="fab fa-github"/> GitHub </a></li>
          <li><a href={LINKEDIN_URL}><i class="fab fa-linkedin"/> LinkedIn </a></li>
          <li><a href={"mailto:" + EMAIL}><i class="fas fa-envelope"/> E-Mail</a></li>
          <li><a href={ANDROID_PLAY_STORE}><i class="fab fa-google-play"/> Android Store </a></li>
          </ul>
        </footer>

      </Router>
    </div>
  );
}

export default App;
