import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  background-color: black;
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;

  div {
    overflow: hidden;
  }

  .mobile_options {
    display: none;
  }

  @media screen and (max-width: 747px) {
    nav .options {
      display: none;
    }

    .mobile_options {
      display: block;
      margin-right: 25px;
    }

    svg {
      font-size: 30px;
    }
  }
`;
