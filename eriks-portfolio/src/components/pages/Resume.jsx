//TODO: Fix resume link. Currently does not redirect to PDF of Resume.PDF (in asset folder)

import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my{" "}
        <span>
          <a href="../assets/Resume.pdf" className="resume-download">
            Resume
          </a>
        </span>
      </p>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>BootStrap</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}
