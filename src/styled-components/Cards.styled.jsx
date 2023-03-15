import styled from "styled-components";

export const CardsSection = styled.section`
  .cardContainer {
    position: relative;
    width: 300px;
    height: 400px;
    min-width: 300px;
    min-height: 400px;
    margin: 4px;
    perspective: 1000px;
  }

  .active {
    transform: translateZ(0px) rotateY(180deg) !important;
  }
  .active:after {
    display: none;
  }

  .card {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    -moz-backface-visibility: hidden;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .card:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 14px 50px -4px hsla(0, 0%, 0%, 0.15);
    opacity: 0;
  }
  .card:hover {
    transform: translateZ(0px);
  }
  .card:hover:after {
    opacity: 1;
  }
  .card .side {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: hsl(0, 0%, 100%);
  }
  .card .front {
    z-index: 2;
  }
  .card .back {
    transform: rotateY(180deg);
  }
  .card .info {
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
    background-image: url(http://i.imgur.com/1aE1nMA.jpg);
  }
  .front .img2 {
    background-image: url(http://i.imgur.com/2p9VXAn.jpg);
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
`;
