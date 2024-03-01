import React from "react";
import "./Services.css";
import { RiShieldUserLine } from "react-icons/ri";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { PiUserCircleGear } from "react-icons/pi";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>What Service i Offer you</h2>

            <h3>Services</h3>
          </div>

          <div className="service-row">
            <div
              className=" my-service"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <div className="ser-back">
                <RiShieldUserLine />
              </div>
              <h4 className="web">
                {"Decentralized Application (DApp) Development"}
              </h4>
              <p className="service-info">
                {
                  "Developers create decentralized applications that run on blockchain platforms. DApps can be built for various purposes, such as finance, supply chain, gaming, and more "
                }
              </p>
              <div class="shadow-icon">
                <i class={""}></i>
              </div>
            </div>
            <div
              className=" my-service"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <div className="ser-back">
                <SiMicrosoftsqlserver />
              </div>
              <h4 className="web">{"Blockchain Integration"}</h4>
              <p className="service-info">
                {
                  "Developers integrate blockchain technology with existing systems and applications, ensuring data interoperability and security"
                }
              </p>
              <div class="shadow-icon">
                <i class={""}></i>
              </div>
            </div>
            <div
              className=" my-service"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <div className="ser-back">
                <PiUserCircleGear />
              </div>
              <h4 className="web">{"Smart Contract Development"}</h4>
              <p className="service-info">
                {
                  "Blockchain developers create smart contracts, self-executing contracts with the terms of the agreement directly written into code. They often use languages like Solidity (for Ethereum) or other blockchain-specific languages"
                }
              </p>
              <div class="shadow-icon">
                <i class={""}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
