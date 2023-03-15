import styled from "styled-components";

export const SkillsSection = styled.section`
  background: black;
  padding: 0 200px 0 200px;
  padding-bottom: 15px;
  h1 {
    padding-top: 15px;
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
  .icon p {
    padding-top: 5px;
    // font-size: 0.6rem;
  }
  .icons-container {
    display: flex;
    align-items: center;
    margin: 25px 0 0 0;
    padding-bottom: 25px;
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
`;
