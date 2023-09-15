import React from "react";
import "./Aboutme.css";
import Dot1 from "../images/decoration/dots-1.png";
import reactagle from "../images/decoration/Rectangle-7.png";
import shady from "../images/decoration/dots.png";

const Aboutme = () => {
  return (
    <div>
      <main id="about">
        <div className="aboutMe-container">
          <div className="about-decor">
            <div className="about-dots">
              <img src={Dot1} alt="" />
            </div>
            <div className="about-rect">
              <img src={reactagle} alt="" />
            </div>
            <div className="about-shady">
              <img src={shady} alt="" />
            </div>
          </div>
          <div className="abouMe-row">
            <div
              className=" col-lg-6 col-md-5 col-sm-12 about-img"
              data-aos="fade-up-right"
            >
              {/* <img src={`${img_300}${d/etails.about_avatar}`} alt="" /> */}
              <img
                style={{ height: "70%", width: "70%" }}
                src={`https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc`}
                alt=""
              />
            </div>
            <div
              className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
              data-aos="fade-up-left"
            >
              <div className="title">
                <h2>{"Kenil raval"}</h2>
                <h3>{"Blockchain developer"}</h3>
              </div>
              <div className="about-description">
                <div id="foo" unselectable="on" class="unselectable">
                  <div
                    dangerouslySetInnerHTML= {{
                      __html: `
                      <p>Hello, I’m Kenil Raval, a dedicated blockchain developer with a deep understanding of the blockchain ecosystem. My journey in the world of blockchain technology has been marked by exciting discoveries and in-depth knowledge of the underlying technology. With an extensive background in blockchain development, I have gained extensive experience across blockchain platforms including Ethereum and Hyperledger.</p>
                      <p>My skill set includes knowledge of various programming languages, including Solidity for smart contract development, Java for complex backend solutions, Solidity for Ethereum-based decentralized applications (DApps), and web development popular ones like React.js and Node.js. and equipment included. 
                      Additionally, my knowledge extends to Python, a versatile language commonly used for blockchain-related projects.</p>
                      
                      <p>My commitment to blockchain development is driven by a vision of a decentralized future, and I am dedicated to harnessing the transformative power of blockchain technology to create innovative solutions that redefine industry. Whether it’s creating secure and efficient smart contracts, developing decentralized applications, or implementing blockchain solutions for real-world use cases, I’m poised to navigate the dynamic and ever-changing landscape of blockchain development </p>`,
                    }}
                  />
                </div>
              </div>

              <div className="itscv">
                <a
                  href=""
                  download="RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="download-cv">
                   MAIL ME<i class="bx bx-download"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutme;
