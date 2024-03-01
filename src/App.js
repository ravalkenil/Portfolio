import React,{useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './Componets/Home/Home';
import Aboutme from './Componets/Aboutme/Aboutme';
import Contectme from "./Componets/Contectme/Contectme";
import Services from "./Componets/Services/Services";
import Projects from "./Componets/Projects/Projects";
import Navbar from "./Componets/Navbar/Navbar";
import Skillbar from "./Componets/Skillbar/Skillbar";
import { Analytics } from '@vercel/analytics/react';


function App() {

  window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
  
    if (preloader) {
      setTimeout(function () {
        preloader.style.transition = "opacity 0.5s";
        preloader.style.opacity = "0";
  
        setTimeout(function () {
          if (preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
        }, 500); 
      }, 100); 
    }
  });
   

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="homepage">
          <Navbar />
          <Home />
        </div>
        <Aboutme />
        <Services />
        <Skillbar/>
        <Projects />
        <Contectme />
        <Analytics />
      </BrowserRouter>
    </>
  );
}

export default App;

