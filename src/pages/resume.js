import Layout from "../components/layout"

import React from 'react';
import './resume.scss';
import cv from '../assets/cv.pdf';
import SEO from "../components/seo"
import profile from '../assets/profile.jpeg'

export default function Resume() {
  return (
    <Layout>
      <SEO title="About Me" />

      <div id="text" class="">
        <img src={profile} alt="profile"/>

        <div>
          <h2>About Me</h2>

          I'm a software engineer mostly interested in web-development, systems software and security. Besides that I have also built some mobile application in my spare time.

          <br/>
          When writting software I'm commited to writting clean code and am obsessed with refactoring to create the simplest possible code structures. 

          <br/>
          <h4 class="mt-3">Other interests</h4>
          Besides programming my other interests include running, hiking and video-games.
        </div>

      </div>


      <div id="resume_pdf_link" class="mt-5">
        <a href={cv}><i class="fas fa-file-pdf fa-lg"></i> Download Resume (PDF)</a>
      </div>

      <div class="pdf_container">
        <embed src={cv} type='application/pdf' class="resume_pdf" />
      </div>
    </Layout>
  );
}
