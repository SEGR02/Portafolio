import React, { useEffect } from "react";
import { NavbarStyled } from "../styled-components/Navbar.styled";

const Navbar = () => {
  useEffect(() => {
    sr.reveal("#home", {
      duration: 2000,
      origin: "bottom",
    });
    sr.reveal("#aboutme", {
      duration: 2000,
      origin: "bottom",
    });
    sr.reveal(".main-conteiner", {
      duration: 2000,
      origin: "left",
    });
    sr.reveal(".projects-container", {
      duration: 2000,
      origin: "rigth",
    });
    sr.reveal(".form-container", {
      duration: 2000,
      origin: "rigth",
    });
    window.sr = ScrollReveal();
  }, [window.sr]);
  return (
    <>
      <NavbarStyled>
        <div className="navbar-container">
          <div className="name">
            <a href="#">Sebastián Gómez</a>
          </div>
          <div className="options">
            <a href="#home">
              <svg
                style={{ paddingBottom: "5px" }}
                width={"22px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  style={{ fill: "white" }}
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
              Home
            </a>
            <a href="#aboutme">
              <svg
                style={{ paddingBottom: "5px" }}
                width={"20px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  style={{ fill: "white" }}
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
              About me
            </a>
            <a href="#skills">
              <svg
                style={{ paddingBottom: "5px" }}
                width={"25px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  style={{ fill: "white" }}
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
              Skills
            </a>
            <a href="#projects">
              <svg
                style={{ paddingBottom: "5px" }}
                width={"22px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  style={{ fill: "white" }}
                  d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"
                />
              </svg>
              Projects
            </a>
            <a href="#contact">
              <svg
                style={{ paddingBottom: "5px" }}
                width={"22px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  style={{ fill: "white" }}
                  d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
                />
              </svg>
              Contact
            </a>
          </div>
        </div>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
