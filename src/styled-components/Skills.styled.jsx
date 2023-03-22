import styled from "styled-components";

export const SkillsSection = styled.section`
  background: black;
  // padding: 0 200px 0 200px;
  padding-bottom: 15px;
  h1 {
    padding-top: 30px;
    text-align: center;
    overflow: hidden;
  }
  p {
    overflow: hidden;
  }
  .levels {
    display: flex;
    justify-content: space-between;
  }
  .high-level {
    margin-left: 5px;
  }
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon img:hover {
    filter: saturate(180%);
    cursor: pointer;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    overflow: hidden;
  }
  .icon p {
    padding-top: 5px;
    // font-size: 0.6rem;
  }
  .icons-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 25px 0 0 0;
    padding-bottom: 25px;
    padding: 0 200px 15px 200px;
  }
  .icon-manual {
    width: 50px;
    height: 50px;
    border: 2px solid green;
    transform: rotate(45deg);
    margin-left: 15px;
    background-color: #519329;
    background-image: linear-gradient(150deg, #7a1fab, #4a2296, #297b8c);
  }
  .background-icon {
    background-color: gray;
    padding: 50px;
  }
  h3 {
    width: 32vw;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 1270px) {
    h3 {
      width: 26vw;
    }
  }
  @media screen and (max-width: 1170px) {
    h3 {
      width: 20vw;
    }
  }
  @media screen and (max-width: 1070px) {
    h3 {
      width: 14vw;
    }
  }
  @media screen and (max-width: 1000px) {
    h3 {
      width: 10vw;
    }
  }
  @media screen and (max-width: 970px) {
    .icons-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
    h3 {
      width: 50vw;
    }
  }
  @media screen and (max-width: 970px) {
    h3 {
      width: 45vw;
    }
  }
  @media screen and (max-width: 800px) {
    h3 {
      width: 40vw;
    }
  }
  @media screen and (max-width: 740px) {
    h3 {
      width: 35vw;
    }
  }
  @media screen and (max-width: 680px) {
    h3 {
      width: 30vw;
    }
  }
  @media screen and (max-width: 640px) {
    h3 {
      width: 25vw;
    }
  }
  @media screen and (max-width: 600px) {
    h3 {
      width: 20vw;
    }
  }
  @media screen and (max-width: 560px) {
    h3 {
      width: 50vw;
    }
    .icons-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 413px) {
    .icons-container {
      display: grid;
      grid-template-columns: repeat(2, 50px);
      padding: 0;
      padding-bottom: 15px;
    }
    h1 {
      padding-bottom: 15px;
    }
    h3 {
      padding-top: 10px;
    }
  }
`;
