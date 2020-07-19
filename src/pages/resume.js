import Layout from "../components/layout"

import React from 'react';
import './resume.scss';
import cv from '../assets/cv.pdf';
import SEO from "../components/seo"

export default function Resume() {
  return (
    <Layout>
      <SEO title="Resume" />

      <h2>Resume</h2>

      I'm a software engineer mostly interested in web-development, systems software and security.

      <div id="resume_pdf_link">
        <a href={cv}><i class="fas fa-file-pdf fa-lg"></i> Download Resume (PDF)</a>
      </div>

      <div class="pdf_container">
        <embed src={cv} type='application/pdf' class="resume_pdf" />
      </div>
    </Layout>
  );
}
