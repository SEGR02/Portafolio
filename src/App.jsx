import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
