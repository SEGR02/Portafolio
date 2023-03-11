import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;

  h1 {
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: white;
  }
  /* header con posición relativa, medidas fijas y fondo de color */
  /* Información con posición absoluta */
  .header__introduction {
    position: absolute;
    /* Todos los límites en cero para ocupar todo el espacio disponible */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  /* Esto no parece ser necesario, se adapta al espacio disponible */
  .background {
    display: block;
  }
`;
