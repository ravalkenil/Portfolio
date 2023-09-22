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
import Footer from "./Componets/Footer/Footer";
import Skillbar from "./Componets/Skillbar/Skillbar";

function App() {

  window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
  
    if (preloader) {
      setTimeout(function () {
        preloader.style.transition = "opacity 0.5s";
        preloader.style.opacity = "0";
  
        setTimeout(function () {
          // Check if the preloader still exists in the DOM before attempting to remove it
          if (preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
        }, 500); // Remove the preloader element after 500 milliseconds (0.5 seconds)
      }, 100); // Delay the fade-out effect for 100 milliseconds (0.1 seconds)
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
{/* <div id="preloader">
          <h2 className="name-load  animate-charcter">loading</h2>
        </div> */}