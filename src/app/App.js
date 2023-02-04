import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import {RoutesComp} from '../app/routes';
import AboutMe from "../features/AboutMe/AboutMe";
import Skills from "../features/Skills/Skills";
import Contact from "../features/Contact/Contact";




function App() {
  return (
    <div className="app">
    <NavBar/>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  );

}

export default App;
