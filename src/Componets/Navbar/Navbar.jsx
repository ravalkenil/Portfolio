import React ,{useEffect}from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import $ from "jquery";

const Navbar = () => {

  // useEffect(() => {
  //   // Hamburger menu
  //   const menuBtns = document.querySelectorAll(".menuBtn");
  //   const menuBtnClickHandler = () => {
  //     menuBtns.forEach((btn) => {
  //       btn.classList.toggle("act");
  //       console.log(btn.classList.toggle("act"));
  //       const mainMenu = document.querySelector(".mainMenu");
  //       if (!btn.classList.contains("act")) {
  //         mainMenu.classList.add("act");
  //       } else {
  //         mainMenu.classList.remove("act");
  //       }
  //     });
  //   };

  //   menuBtns.forEach((btn) => {
  //     btn.addEventListener("click", menuBtnClickHandler);
  //   });

  //   // Click to scroll
  //   const menuLinks = document.querySelectorAll(".mainMenu li a");
  //   const menuLinkClickHandler = (e) => {
  //     e.preventDefault();
  //     const targetHref = e.currentTarget.getAttribute("href");
  //     const targetElement = document.querySelector(targetHref);
  //     if (targetElement) {
  //       window.scrollTo({
  //         top: targetElement.offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //     const menuBtn = document.querySelector(".menuBtn");
  //     const mainMenu = document.querySelector(".mainMenu");
  //     menuBtn.classList.remove("act");
  //     mainMenu.classList.remove("act");
  //   };
  //   menuLinks.forEach((link) => {
  //     link.addEventListener("click", menuLinkClickHandler);
  //   });

  //   // Change navbar color on scroll
  //   const nav = document.querySelector(".navbur");
  //   const handleScroll = () => {
  //     if (window.scrollY > nav.clientHeight) {
  //       nav.classList.add("scrolled");
  //     } else {
  //       nav.classList.remove("scrolled");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   // Toggle light and dark theme
  //   const toggleBtn = document.querySelector(".toggle");
  //   const toggleBtnClickHandler = () => {
  //     document.body.classList.toggle("light");
  //   };
  //   toggleBtn.addEventListener("click", toggleBtnClickHandler);

  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     menuBtns.forEach((btn) => {
  //       btn.removeEventListener("click", menuBtnClickHandler);
  //     });
  //     menuLinks.forEach((link) => {
  //       link.removeEventListener("click", menuLinkClickHandler);
  //     });
  //     window.removeEventListener("scroll", handleScroll);
  //     toggleBtn.removeEventListener("click", toggleBtnClickHandler);
  //   };
  // }, []);
  $(document).ready(function () {
    $(".menuBtn").click(function () {
      $(this).toggleClass("act");
      if ($(this).hasClass("act")) {
        $(".mainMenu").addClass("act");
      } else {
        $(".mainMenu").removeClass("act");
      }
    });
  });

  // click to scroll
  $(document).ready(function () {
    $(".mainMenu li a").click(function (e) {
      var targetHref = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(targetHref).offset().top,
        },
        1000
      );
      $(".mainMenu").removeClass("act");

      if ($(this).hasClass("act")) {
        $(".menuBtn").addClass("act");
      } else {
        $(".menuBtn").removeClass("act");
      }

      e.preventDefault();
    });
  });

  // change navbar color on scroll
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbur");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  // toggle light and dark theme
  $(window).on("load", function () {
    $(".toggle").on("click", () => {
      $("body").toggleClass("light");
    });
  });

  return (
    <>
      <button type="button" className="mobile-nav-toggle d-lg-none">
        <i className="icofont-navigation-menu"></i>
      </button>
      
      <header id="header" className="fixed-top" style={{ width:"100%",position:"fixed",right:"0px",top:"0px",left:"0px"}}>
        <div className="container-fluid  navbur">
          <div className="navi">
            <div
              className="col-xl-12 d-flex align-items-center lefty"
              style={{ display: "flex", justifyContent: "space-around" , padding:"10px",alignItems:"center"}}
            >
              <div>
                <h5 className="ld-flex mr-auto devman">
                  <img
                    src="https://code.google.com/images/developers.png"
                    alt=""
                  />
                  RK.DEV <span className="blink">_</span>
                </h5>

                {/* <div className="" id="theme-button">
                    <Link to="#" class="menuBtn">
                      <span class="lines"></span>
                    </Link>
                </div> */}
              </div>
              <nav
                className="nav-menu  mainMenu"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",

                }}
              >
                <ul>
                  <li
                    className="active"
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
                    <a href="#home"> Home</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="600">
                    <a href="#about">About</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="900">
                    <a href="#services">Services</a>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <a href="#skills">Skills</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1500">
                    <a href="#work">My Work</a>
                  </li>

                  <li data-aos="fade-down" data-aos-duration="1800">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                </nav>
                <div className="left-btns">
                  <div class=" " id="theme-button2">
                    <input id="toggle" class="toggle" type="checkbox"></input>
                  </div>
                  <div>
                    <div className="CvMe">
                      <button className="my-cv">Contact Me</button>
                    </div>
                  </div>

                  <div className="" id="theme-button" style={{ display: "flex", padding:"10px",alignItems:"center"}}>
                    <Link to="#" class="menuBtn">
                      <span class="lines"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="nav-social">
                <i className="fa fa-github"></i>
              </div> */}
            </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
