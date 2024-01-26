import React from "react";

const AboutMe = () => {
  return (
    <>
      <section id="aboutme" className="section1">
        <h1>About me</h1>
        <div className="container">
          <div className="card">
            <p align="left">
              Regards!, I'm{" "}
              <b>
                Bachelor of Science in Computer Engineering & Full Stack
                Developer.{" "}
              </b>
              My experience ranges from landing pages to end-to-end websites. I
              also have experience in mobile development.
              <br />
              Likewise, among my soft skills highlights are{" "}
              <b>
                adaptability, critical thinking, time management, teamwork,
                problem-solving ability, resilience, commitment.
              </b>
              <br />
              <p className="author">Sebastián Gómez</p>
            </p>
          </div>
          <div className="button">
            <a href="#contact">
              <button href="#contact" className="magic">
                <span className="boton">Contact me</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
