/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './App.scss';
import './header.scss';
import './footer.scss';

import CONSTANTS from './constants.js';
import Anchor, { ICONS } from './anchor.js';
import profile from '../assets/profile.jpeg'

const NAME = CONSTANTS.name;
const PROFESSION = "Software Engineer";
const GITHUB_URL = "https://github.com/Ross65536";
const LINKEDIN_URL = "https://www.linkedin.com/in/rostyslav-khoptiy/";
// const ANDROID_PLAY_STORE = "https://play.google.com/store/apps/developer?id=Ros+Software";
const EMAIL = "rk65536@protonmail.com";

const Layout = ({ children }) => {
  return (
    <>
      <div className="App" id="main">
      {/* HEADER */}
      <div id="header-top">
          <img src={profile} alt="profile"/>
          <header id="header">
            <div>
              <h1 id="name">
                <Link to="./">{NAME}</Link>
              </h1>
              <h3 id="profession">
                {PROFESSION}
              </h3>
            </div>

            <nav id="top-bar">
              <ul>
                <li><Link to='/'>Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </header>
        </div>

        {/* BODY */}
        <div id="page-content">
          <main>{children}</main>
        </div>

        {/* FOOTER */}
        <footer id="footer">
          <ul>
            <li><Anchor name="Github" url={GITHUB_URL} icon={ICONS.github} /></li>
            <li><Anchor name="LinkedIn" url={LINKEDIN_URL} icon={ICONS.linkedin} /></li>
            <li><Anchor name="E-Mail" url={"mailto:" + EMAIL} icon={ICONS.email} /></li>
            {/* <li><Anchor name="Android Store" url={ANDROID_PLAY_STORE} icon={ICONS.android_store} /></li> */}
          </ul>
        </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
