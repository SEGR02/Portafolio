import React from "react";

const AboutMe = () => {
  return (
    <>
      <section id="aboutme" className="section1">
        <h1>About me</h1>
        <div className="container">
          <div className="card">
            <p align="left">
              Regards!, I'm
              <b> TSU in Computer Science & Web Full Stack Developer</b>, at
              this moment I'm studing to graduate as a <b>Computer Engineer</b>,
              my more solid stack is with
              <b> ReactJS + NodeJS with JavaScript</b> In addition to
              fundamental tools such as <b>Git, HTML & CSS.</b>
              <br />
              Likewise, among my soft skills highlights are{" "}
              <b>
                adaptability, critical thinking, time management, teamwork,
                problem-solving ability, resilience, commitment.
              </b>
              <br />
              <p className="author">Sebastian Gomez</p>
            </p>
          </div>
          <div className="button">
            <button className="magic">
              <span className="boton">Contact me</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
