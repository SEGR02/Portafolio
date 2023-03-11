import React from "react";
import { HeaderStyled } from "../styled-components/Header.styled";

const Home = () => {
  return (
    <>
      <HeaderStyled>
        <div>
          <canvas className="background"></canvas>
          <div className="header__introduction">
            <h1 className="typed">a</h1>
          </div>
        </div>
      </HeaderStyled>
      <script src="./background.js"></script>
      {/* <script>
        // Run Background. window.onload = function (){" "}
        {Particles.init({
          selector: ".background",
          color: "#87b7ff",
          maxParticles: 110,
          connectParticles: true,
          responsive: [
            {
              breakpoint: 947,
              options: {
                maxParticles: 100,
              },
            },
            {
              breakpoint: 847,
              options: {
                maxParticles: 90,
              },
            },
            {
              breakpoint: 647,
              options: {
                maxParticles: 76,
              },
            },
            {
              breakpoint: 477,
              options: {
                maxParticles: 46,
              },
            },
            {
              breakpoint: 300,
              options: {
                maxParticles: 26,
              },
            },
          ],
        })}
        ;
      </script> */}
    </>
  );
};

export default Home;
