import React from "react";
import { NavbarStyled } from "../styled-components/Navbar.styled";

const Navbar = () => {
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  return (
    <>
      <NavbarStyled>
        <div className="navbar-container">
          <div className="name">
            <a href="#">Sebastian Gomez</a>
          </div>
          <div className="options">
            <a href="#home">Home</a>
            <a href="#aboutme">About me</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
          <div className="mobile_options">
            <button
              className="mobile_menu"
              onClick={() => {
                console.log(menuIsActive);
                setMenuIsActive(!menuIsActive);
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </NavbarStyled>
      {/* {menuIsActive && (
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About me</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
