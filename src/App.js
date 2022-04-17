import React from "react";
import "./style.css";
import Geninfo from "./components/Geninfo.js";
import Education from "./components/Education.js" ;
import Experience from "./components/Experience.js"; 
import Summary from "./components/Summary.js" ;

export default function App() {
  return (
    <div>
      <Geninfo/>
      <Summary/>
     <Education/>
     <Experience/>
    </div>
  );
}

