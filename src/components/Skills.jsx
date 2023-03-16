import React from "react";
import { SkillsSection } from "../styled-components/Skills.styled";
import reactIcon from "../assets/react.png";
import JSIcon from "../assets/js.png";
import cssIcon from "../assets/css.png";
import htmlIcon from "../assets/html.png";
import boostrapIcon from "../assets/boostrap.png";
import nodeIcon from "../assets/node.png";
import sequelizeIcon from "../assets/sequelize.png";
import expressIcon from "../assets/express.png";
import postgresqlIcon from "../assets/postgresql.png";
import reduxIcon from "../assets/redux.png";
import gitIcon from "../assets/git.png";
import npmIcon from "../assets/npm.png";
import githubIcon from "../assets/github.png";
import sqlIcon from "../assets/sql.png";
import axiosIcon from "../assets/axios.png";
import styled_componentsIcon from "../assets/styled-componentsCopy.png";
import javaIcon from "../assets/java.png";
import springIcon from "../assets/spring.png";
import figmaIcon from "../assets/figma.png";
import cloudinaryIcon from "../assets/cloudinary.png";
import postmanIcon from "../assets/postman.png";
import trelloIcon from "../assets/trello.png";
import powershellIcon from "../assets/powershell.png";
import jestIcon from "../assets/jest.png";
import sassIcon from "../assets/sass.png";

const Skills = () => {
  return (
    <>
      <SkillsSection id="skills">
        <div className="title-container">
          <h1>Skills</h1>
        </div>
        <div className="main-conteiner">
          <div>
            <h3>Frontend</h3>
            <div className="icons-container">
              <div className="icon" style={{ marginLeft: "5px" }}>
                <img width="85px" src={reactIcon} alt="React" />
                <p>ReactJS</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={JSIcon} alt="React" />
                <p>JavaScript</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={cssIcon} alt="React" />
                <p>CSS</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={htmlIcon} alt="React" />
                <p>HTML</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={boostrapIcon} alt="React" />
                <p>Boostrap</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={reduxIcon} alt="React" />
                <p>Redux</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={axiosIcon} alt="React" />
                <p>Axios</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={styled_componentsIcon} alt="React" />
                <p>StyleComponent</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={sassIcon} alt="React" />
                <p>Sass</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Backend</h3>
            <div className="icons-container">
              <div className="icon" style={{ marginLeft: "5px" }}>
                <img width="85px" src={nodeIcon} alt="React" />
                <p>NodeJS</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={sequelizeIcon} alt="React" />
                <p>Sequelize</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={expressIcon} alt="React" />
                <p>Express</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={postgresqlIcon} alt="React" />
                <p>PostgreSQL</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={sqlIcon} alt="React" />
                <p>SQL</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={javaIcon} alt="React" />
                <p>Java</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={springIcon} alt="React" />
                <p>Spring</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={cloudinaryIcon} alt="React" />
                <p>Cloudinary</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={postmanIcon} alt="React" />
                <p>Postman</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Others</h3>
            <div className="icons-container">
              <div className="icon" style={{ marginLeft: "5px" }}>
                <img width="85px" src={gitIcon} alt="React" />
                <p>Git</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={npmIcon} alt="React" />
                <p>Npm</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={githubIcon} alt="React" />
                <p>GitHub</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={figmaIcon} alt="React" />
                <p>Figma</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={trelloIcon} alt="React" />
                <p>Trello</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={powershellIcon} alt="React" />
                <p>PowerShell</p>
              </div>
              <div className="icon" style={{ marginLeft: "20px" }}>
                <img width="85px" src={jestIcon} alt="React" />
                <p>Jest</p>
              </div>
            </div>
          </div>
        </div>
      </SkillsSection>
    </>
  );
};

export default Skills;
