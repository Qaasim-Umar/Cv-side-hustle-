import React from "react";
import "./style.css";
import Geninfo from "./components/Geninfo.js";
import Education from "./components/Education.js" ;
import Footer from "./components/Footer.js"; 
import Summary from "./components/Summary.js" ;

import Logo from "./components/Logo.jpg" ;



export default function App() {
  return (
    <div>
      <img src={Logo}/>
      <Geninfo/>
      <Summary/>
     <Education/>
     <Footer/>
    </div>
  );
}

