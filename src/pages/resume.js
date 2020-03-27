import React from 'react';
import './resume.scss';

const FILE_NAME = "cv.pdf"

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>

      I'm a software engineer mostly interested in web-development, systems software and security.

      <div id="resume_pdf_link">
        <a href={FILE_NAME}><i class="fas fa-file-pdf fa-lg"></i> Download Resume (PDF)</a>
      </div>

      <div class="pdf_container">
        <embed src={FILE_NAME} type='application/pdf' class="resume_pdf" />
      </div>


    </div>
  );
}
