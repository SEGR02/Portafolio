import React from "react";
import { ContactStyled } from "../styled-components/Contact.styled";
import {
  ContactSection,
  ProjectsSection,
} from "../styled-components/Projects.styled";

const Projects = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isActive2, setIsActive2] = React.useState(false);
  const [isActive3, setIsActive3] = React.useState(false);
  const [isActive4, setIsActive4] = React.useState(false);
  const [isActive5, setIsActive5] = React.useState(false);
  const [isActive6, setIsActive6] = React.useState(false);

  return (
    <>
      <ProjectsSection>
        <h1 id="projects">Projects</h1>
        <div className="projects-container">
          {/* <div class="cardContainer">
            <div
              onClick={(e) => setIsActive(!isActive)}
              class={isActive ? "card2 active" : "card2"}
            >
              <div class="side front">
                <div class="img img1"></div>
                <div class="info">
                  <h2
                    style={{
                      borderTop: "1.5px solid black",
                      paddingTop: "5px",
                    }}
                  >
                    E-commerce
                  </h2>
                  <p>
                    An application where users buy white and gray line items
                    sold by a company.
                  </p>
                </div>
              </div>
              <div class="side back">
                <div class="info">
                  <div className="title-project">
                    <h2>Technologies</h2>
                  </div>
                  <div className="body-project">
                    <p>
                      <b style={{ color: "black" }}>Frontend:</b> ReactJS,
                      Redux, Styled-Components, TailWindCss React-Router-Dom,
                      ReduxToolKit, Axios, Jest, React-Hook-Form,
                      Testing-Library-React, Rome, Vite
                    </p>
                    <p>
                      <b style={{ color: "black" }}>Backend:</b> Spring
                      framework (MVC, Data, Security, HATEOAS), Hibernate,
                      Mysql, Swagger, Maven, Docker
                    </p>
                    <b>
                      <p>Authors:</p>
                      <p>Sebastian Gomez: Full Stack</p>
                    </b>
                    <p>
                      Sarai Hernandez, Vanina Restelli, Manuel Nacer, Sebastian
                      De La Cruz, Gaston Gutierrez, Daniel Amado, Marcio
                      Huacacolqui, Nicolas Canul, Julio Alvarez
                    </p>
                    <div class="buttons-container">
                      <a
                        target="_blank"
                        href="https://admirable-llama-f5071c.netlify.app/#/"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">Demo</span>
                        </button>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/SEGR02/E-commerceReact"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">GitHub</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="cardContainer">
            <div
              onClick={(e) => setIsActive2(!isActive2)}
              className={isActive2 ? "card2 active" : "card2"}
            >
              <div className="side front">
                <div className="img img2"></div>
                <div className="info">
                  <h2>Country Resto</h2>
                  <p>
                    An application that provides users with an electronic
                    restaurant menu to order food by delivery or pickup
                    <b className="readmore"> Read more</b>
                  </p>
                </div>
              </div>
              <div className="side back">
                <div className="info">
                  <div className="title-project">
                    <h2>Technologies</h2>
                  </div>
                  <div className="body-project">
                    <p>
                      <b style={{ color: "black" }}>Frontend:</b> ReactJS,
                      Redux, Styled-Components, TailWindCss React-Router-Dom,
                      ReduxToolKit, Axios, Jest, React-Hook-Form,
                      Testing-Library-React, Rome, Vite
                    </p>
                    <p>
                      <b style={{ color: "black" }}>Backend:</b> Spring
                      framework (MVC, Data, Security, HATEOAS), Hibernate,
                      Mysql, Swagger, Maven, Docker
                    </p>
                    <b>
                      <p>Authors:</p>
                      <p>Sebastian Gomez: Full Stack Developer</p>
                    </b>
                    <p>
                      Sarai Hernandez, Vanina Restelli, Manuel Nacer, Sebastian
                      De La Cruz, Gaston Gutierrez, Daniel Amado, Marcio
                      Huacacolqui, Nicolas Canul, Julio Alvarez
                    </p>
                    <div className="buttons-container">
                      <a
                        target="_blank"
                        href="https://c9-20-javareact-fulltime-production.up.railway.app/app#/"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">Demo</span>
                        </button>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/No-Country/c9-20-javareact-fulltime"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">GitHub</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div
              onClick={(e) => setIsActive3(!isActive3)}
              className={isActive3 ? "card2 active" : "card2"}
            >
              <div className="side front">
                <div className="img img3"></div>
                <div className="info">
                  <h2>E-commerce API</h2>
                  <p>
                    An API that allows registering and logging in users,
                    obtaining and creating products for e-commerce
                    <b className="readmore"> Read more</b>
                  </p>
                </div>
              </div>
              <div className="side back">
                <div className="info">
                  <div className="title-project">
                    <h2>Technologies</h2>
                  </div>
                  <div className="body-project">
                    <p>
                      <b style={{ color: "black" }}>Backend:</b> JavaScript,
                      NodeJS, Express, Sequelize, Swagger, PostgreSQL, Postman
                    </p>
                    <b>
                      <p>Author:</p>
                      <p>Sebastian Gomez: Backend Developer</p>
                    </b>
                    <div className="buttons-container semi-simple">
                      <a
                        target="_blank"
                        href="https://ecommerce-academlo-sebas.onrender.com/api/v1/docs/"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">Demo</span>
                        </button>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/SEGR02/ecommerce-api"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">GitHub</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="cardContainer">
            <div
              onClick={(e) => setIsActive4(!isActive4)}
              class={isActive4 ? "card2 active" : "card2"}
            >
              <div class="side front">
                <div class="img img4"></div>
                <div class="info">
                  <h2>PokeDex</h2>
                  <p>
                    An application where users can view all the pokemons
                    filtered by types with their characteristics.
                  </p>
                </div>
              </div>
              <div class="side back">
                <div class="info">
                  <div className="title-project">
                    <h2>Technologies</h2>
                  </div>
                  <div className="body-project">
                    <p>
                      <b style={{ color: "black" }}>Frontend:</b> ReactJS,
                      Redux, Styled-Components, TailWindCss React-Router-Dom,
                      ReduxToolKit, Axios, Jest, React-Hook-Form,
                      Testing-Library-React, Rome, Vite
                    </p>
                    <p>
                      <b style={{ color: "black" }}>Backend:</b> Spring
                      framework (MVC, Data, Security, HATEOAS), Hibernate,
                      Mysql, Swagger, Maven, Docker
                    </p>
                    <b>
                      <p>Authors:</p>
                      <p>Sebastian Gomez: Full Stack</p>
                    </b>
                    <p>
                      Sarai Hernandez, Vanina Restelli, Manuel Nacer, Sebastian
                      De La Cruz, Gaston Gutierrez, Daniel Amado, Marcio
                      Huacacolqui, Nicolas Canul, Julio Alvarez
                    </p>
                    <div class="buttons-container">
                      <a
                        target="_blank"
                        href="https://admirable-llama-f5071c.netlify.app/#/"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">Demo</span>
                        </button>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/SEGR02/E-commerceReact"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">GitHub</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="cardContainer">
            <div
              onClick={(e) => setIsActive5(!isActive5)}
              className={isActive5 ? "card2 active" : "card2"}
            >
              <div className="side front">
                <div className="img img5"></div>
                <div className="info">
                  <h2>Rick & Morty</h2>
                  <p>
                    An application for users who want to see the characters of
                    the R&M series filter by dimension, with their information
                    <b className="readmore"> Read more</b>
                  </p>
                </div>
              </div>
              <div className="side back">
                <div className="info">
                  <div className="title-project">
                    <h2>Technologies</h2>
                  </div>
                  <div className="body-project">
                    <p>
                      <b style={{ color: "black" }}>Frontend:</b> JavaScript,
                      React, Axios, HTML, CSS
                    </p>
                    <b>
                      <p>Author:</p>
                      <p>Sebastian Gomez: Frontend Developer</p>
                    </b>
                    <div className="buttons-container simple">
                      <a
                        target="_blank"
                        href="https://charming-sorbet-d18b85.netlify.app"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">Demo</span>
                        </button>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/SEGR02/RickAndMorty"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">GitHub</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div
              onClick={(e) => setIsActive6(!isActive6)}
              className={isActive6 ? "card2 active" : "card2"}
            >
              <div className="side front">
                <div className="img img6"></div>
                <div className="info">
                  <h2>WheaterApp</h2>
                  <p>
                    An application that allows you to see weather information
                    depending on your current location
                    <b className="readmore"> Read more</b>
                  </p>
                </div>
              </div>
              <div className="side back">
                <div className="info">
                  <div className="title-project">
                    <h2>Technologies</h2>
                  </div>
                  <div className="body-project">
                    <p>
                      <b style={{ color: "black" }}>Frontend:</b> JavaScript,
                      React, Axios, HTML, CSS
                    </p>
                    <b>
                      <p>Author:</p>
                      <p>Sebastian Gomez: Frontend Developer</p>
                    </b>
                    <div className="buttons-container simple">
                      <a
                        target="_blank"
                        href="https://mellow-lily-c066c9.netlify.app"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">Demo</span>
                        </button>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/SEGR02/Weather"
                      >
                        <button className="magic magic-project">
                          <span className="boton boton-project">GitHub</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection>
          <div className="form-container">
            <div className="title-contact">
              <h1 id="contact">Contact</h1>
            </div>
            <div className="form">
              <form
                action="https://formsubmit.co/sebastian.gomz02@gmail.com"
                method="POST"
              >
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  placeholder="Name"
                  type="text"
                  name="Name"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="email@example.com"
                  type="email"
                  name="Email"
                  required
                />
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  placeholder="Full stack vacant"
                  type="text"
                  name="Subject"
                  required
                />
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Can we talk about your experience in a meet?"
                  name="Message"
                  id="message"
                  cols="65"
                  rows="5"
                  required
                ></textarea>
                <div className="button-contact">
                  <button
                    className="magic magic-project magic-contact"
                    type="submit"
                  >
                    <span className="boton boton-project boton-contact">
                      Send
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ContactSection>
      </ProjectsSection>
    </>
  );
};

export default Projects;
