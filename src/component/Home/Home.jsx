import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import Benner from "../Banner/Benner";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      {/* <NavBar></NavBar> */}
      <Benner></Benner>
      {/* <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact> */}
    </div>
  );
};

export default Home;
