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

  .options svg {
    display: none;
  }

  @media screen and (max-width: 747px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
    background-color: black;
    z-index: 1;
    position: fixed;
    top: initial;
    bottom: 0px;
    width: 100%;
    overflow: hidden;

    .options svg {
      // font-size: 22px;
      display: block;
    }

    .options {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    .options a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 0.63rem;
    }
    .name {
      display: none;
    }
  }
`;
