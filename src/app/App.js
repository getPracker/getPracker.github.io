import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import {RoutesComp} from '../app/routes';
// import AboutMe from "../features/AboutMe/AboutMe";
// import Skills from "../features/Skills/Skills";
// import Contact from "../features/Contact/Contact";
// import Header from "../components/Header/Header";




function App() {
  return (
    <div className="app">
    <NavBar/>
    <RoutesComp/>
    <Footer/>
    </div>
  );

}

export default App;
