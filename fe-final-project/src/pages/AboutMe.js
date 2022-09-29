import React from "react";

function AboutMe() {
  return (
    <>
      <div className="page-intro">
        <h1>About Me</h1>
      </div>
      <div className="about-me">
        <p>
          This project is and will continue to be a work in progress. I very
          much enjoyed the mostly open-ended nature of the project. There are so
          many different features I could/would want to implement into this
          project.
        </p>
        <p>
          I want this dinosaur project to be a reflection of my cumulative
          knowledge from both the back-end and front-end bootcamps, all the
          knowledge in between, and everything beyond that I am still learning.
        </p>
        <p>
          If you stumbled upon this project, please use this as a representation
          of what I have to offer when considering me for work. Outside links to
          my GitHub profile and LinkedIn profile will be listed below.
        </p>
        <a className="link" href="https://github.com/spobrien1116">
          GitHub
        </a>
        <br></br>
        <a className="link" href="https://www.linkedin.com/in/spobrien1116/">
          LinkedIn
        </a>
        <br></br>
        <p>
          <b>Creator: </b>Shawn O'Brien
        </p>
      </div>
    </>
  );
}

export default AboutMe;
