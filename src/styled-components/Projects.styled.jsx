import styled from "styled-components";

export const ProjectsSection = styled.section`
  background: radial-gradient(
    circle,
    rgba(76, 46, 124, 1) 10%,
    rgba(39, 4, 57, 1) 90%
  );
  padding: 0 150px 50px 150px;
  h1 {
    padding-top: 15px;
    padding-bottom: 15px;
    overflow: hidden;
    text-align: center;
  }
  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 500px);
    // grid-template: repeat(2, 1fr) / repeat(2, 1fr); //filas columnas
    gap: 5%;
    width: 100%;
    justify-content: center;
  }
  .proyect-card {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    cursor: pointer;
  }
  .proyect-card:hover {
    box-shadow: 0 14px 50px -4px hsla(0, 0%, 0%, 1);
  }
  .card-description {
    padding: 5px 10px;
    background-color: white;
  }
  .card-img {
    height: calc(100% / 1.3);
  }
  @media screen and (max-width: 1420px) {
    .card-img {
      height: calc(100% / 1.35);
    }
  }
  @media screen and (max-width: 1327px) {
    .card-img {
      height: calc(100% / 1.5);
    }
  }
  @media screen and (max-width: 1219px) {
    .card-img {
      height: calc(100% / 1.6);
    }
  }
  @media screen and (max-width: 1095px) {
    .card-img {
      height: calc(100% / 1.72);
    }
  }
  @media screen and (max-width: 1053px) {
    .card-img {
      height: calc(100% / 1.97);
    }
  }
  h6,
  p {
    color: black;
  }

  .cardContainer {
    position: relative;
    width: 500px;
    height: 350px;
    min-width: 300px;
    min-height: 350px;
    margin: 4px;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    transform: translateZ(0px) rotateY(180deg) !important;
  }
  .active:after {
    display: none;
  }

  .card2 {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    -moz-backface-visibility: hidden;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .card2:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 14px 50px -4px hsla(0, 0%, 0%, 0.15);
    opacity: 0;
  }
  .card2:hover {
    transform: translateZ(0px);
  }
  .card2:hover:after {
    opacity: 1;
  }
  .card2 .side {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: hsl(0, 0%, 100%);
  }
  .card2 .front {
    z-index: 2;
  }
  .card2 .back {
    transform: rotateY(180deg);
  }
  .card2 .info {
    padding: 16px;
  }

  .front .img {
    background-color: hsl(223, 13%, 87%);
    background-position: center;
    background-size: cover;
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 250px;
  }
  .front .img1 {
    background-image: url(https://res.cloudinary.com/doxahduh8/image/upload/v1678838439/ecommerce_nm1wsq.png);
  }
  .front .img2 {
    background-image: url(https://res.cloudinary.com/doxahduh8/image/upload/v1678841028/resto_cllcjc.png);
  }
  .front .img3 {
    background-image: url(http://i.imgur.com/I5ABT2v.jpg);
  }

  .back {
    position: relative;
  }
  .back h2 {
    margin-top: 6px;
    margin-bottom: 18px;
  }
  .back .reviews {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    cursor: pointer;
  }
  .back .reviews p {
    color: hsl(0, 0%, 77%);
    font-weight: 300;
    margin: 1px 0 0 6px;
    transition: 0.3s ease-in-out;
  }
  .back .reviews:hover p {
    color: #555;
  }
  .back li {
    line-height: 22px;
    margin: 2px 0 6px 0;
  }
  .back .btn {
    position: absolute;
    bottom: 16px;
    width: calc(100% - 32px);
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffc324;
    background-image: linear-gradient(-90deg, #ffb714, #ffe579);
    border-radius: 5px;
    cursor: pointer;
  }
  .back .btn:hover h4 {
    transform: translateX(0px);
  }
  .back .btn:hover svg {
    transform: translateX(0px);
    opacity: 1;
  }
  .back .btn h4 {
    transform: translateX(12px);
    transition: transform 0.3s ease-out;
  }
  .back .btn svg {
    margin: 1px 0 0 4px;
    transform: translateX(-8px);
    opacity: 0;
    transition: all 0.3s ease-out;
  }
  h2 {
    color: black;
  }
  .buttons-container {
    display: flex;
  }
`;
