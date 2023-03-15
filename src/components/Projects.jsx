import React from "react";
import { ProjectsSection } from "../styled-components/Projects.styled";
import ecommerceImage from "../assets/ecommerce.png";
import { CardsSection } from "../styled-components/Cards.styled";

const Projects = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isActive2, setIsActive2] = React.useState(false);

  return (
    <>
      <ProjectsSection>
        <h1>Projects</h1>
        <div className="projects-container">
          <div class="cardContainer">
            <div
              onClick={(e) => setIsActive2(!isActive2)}
              class={isActive2 ? "card2 active" : "card2"}
            >
              <div class="side front">
                <div class="img img2"></div>
                <div class="info">
                  <h2>Country Resto</h2>
                  <p>
                    A stand-on with an exceptional compact stance. Great for
                    tight spaces and trailering.
                  </p>
                </div>
              </div>
              <div class="side back">
                <div class="info">
                  <h2>At a glance</h2>
                  <div class="reviews">
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path d="M0 0h24v24H0V0z" id="a" />
                      </defs>
                      <clipPath id="b">
                        <use overflow="visible" xlink:href="#a" />
                      </clipPath>
                      <path
                        clip-path="url(#b)"
                        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                      />
                    </svg>
                    <p>23 Reviews</p>
                  </div>
                  <ul>
                    <li>
                      Manage backyard gates with ease with the 36" deck option
                    </li>
                    <li>
                      Your choice of deck sizes ranging from 36", 48", 52" and
                      60"
                    </li>
                    <li>
                      Updated hip bolstering offers superior operator comfort
                      and positioning
                    </li>
                  </ul>
                  <div class="buttons-container">
                    <a
                      target="_blank"
                      href="https://c9-20-javareact-fulltime-production.up.railway.app/app#/"
                    >
                      <button className="magic">
                        <span className="boton">Demo</span>
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/No-Country/c9-20-javareact-fulltime"
                    >
                      <button className="magic">
                        <span className="boton">GitHub</span>
                      </button>
                    </a>
                    {/* <h4>Learn More</h4>
                    <svg
                      fill="#333"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                      <path d="M0-.25h24v24H0z" fill="none" />
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cardContainer">
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
                    A stand-on with an exceptional compact stance. Great for
                    tight spaces and trailering.
                  </p>
                </div>
              </div>
              <div class="side back">
                <div class="info">
                  <h2>At a glance</h2>
                  <div class="reviews">
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <svg
                      fill="#FFC324"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path d="M0 0h24v24H0V0z" id="a" />
                      </defs>
                      <clipPath id="b">
                        <use overflow="visible" xlink:href="#a" />
                      </clipPath>
                      <path
                        clip-path="url(#b)"
                        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                      />
                    </svg>
                    <p>23 Reviews</p>
                  </div>
                  <ul>
                    <li>
                      Manage backyard gates with ease with the 36" deck option
                    </li>
                    <li>
                      Your choice of deck sizes ranging from 36", 48", 52" and
                      60"
                    </li>
                    <li>
                      Updated hip bolstering offers superior operator comfort
                      and positioning
                    </li>
                  </ul>
                  <div class="btn">
                    <h4>Learn More</h4>
                    <svg
                      fill="#333"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                      <path d="M0-.25h24v24H0z" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectsSection>
    </>
  );
};

export default Projects;
