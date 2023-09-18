import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Skillbar.css";

// Frontend
import Rectjs from "../images/frontend/reactjs.png";
import Nextjs from "../images/frontend/nextjs.svg";
import Html from "../images/frontend/html.png";
import Css from "../images/frontend/css.png";
import Javascript from "../images/frontend/javascript.png";
import Bootstarp from "../images/frontend/bootstrap.png";
import Python from "../images/frontend/python.png";

// Backend
import Nodejs from "../images/backend/nodejs.png"
import Mongodb from "../images/backend/mongodb.png"
import Express from "../images/backend/expressjs.png"
import Django from "../images/backend/django.png"
import Sql from "../images/backend/database.png"
import Auth0 from "../images/backend/auth0.png"

// Blockchain

import Solidty from "../images/blockchain/solidity.png";
import Ethereum from "../images/blockchain/Ethereum.png";
import Blockchain from "../images/blockchain/blockchain.png";
import Etherjs from "../images/blockchain/ethersjs.png";
import Hyperledger from "../images/blockchain/hyperledger.png";
import Truffle from "../images/blockchain/truffle.png";
import Walletconnect from "../images/blockchain/walletconnect.png";



const Skillbar = () => {
  const responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 2,
    },
    665: {
      items: 3,
    },
    767: {
      items: 3,
    },
    870: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1265: {
      items: 6,
    },
  };

  const fricons = [
    { lang_name: "React Js", icon: `${Rectjs}`, exp_level: "high" },
    { lang_name: "Next Js", icon: `${Nextjs}`, exp_level: "high" },
    { lang_name: "HTML", icon: `${Html}`, exp_level: "high" },
    { lang_name: "CSS", icon: `${Css}`, exp_level: "high" },
    { lang_name: "Javascript", icon: `${Javascript}`, exp_level: "high" },
    { lang_name: "Bootstrap", icon: `${Bootstarp}`, exp_level: "high" },
    { lang_name: "Python", icon: `${Python}`, exp_level: "high" },
  ];

  const Bcicons=[
    { lang_name: "Node js", icon: `${Nodejs}`, exp_level: "high" },
    { lang_name: "Mongodb", icon: `${Mongodb}`, exp_level: "high" },
    { lang_name: "Express", icon: `${Express}`, exp_level: "high" },
    { lang_name: "Django", icon: `${Django}`, exp_level: "high" },
    { lang_name: "Sql", icon: `${Sql}`, exp_level: "high" },
    { lang_name: "Auth0", icon: `${Auth0}`, exp_level: "high" },
  ]

  const Blockicons=[
    { lang_name: "Solidity", icon: `${Solidty}`, exp_level: "high" },
    { lang_name: "Ethereum", icon: `${Ethereum}`, exp_level: "high" },
    { lang_name: "Blockchain", icon: `${Blockchain}`, exp_level: "high" },
    { lang_name: "Ether js", icon: `${Etherjs}`, exp_level: "high" },
    { lang_name: "Hyperledger", icon: `${Hyperledger}`, exp_level: "high" },
    { lang_name: "Truffle", icon: `${Truffle}`, exp_level: "high" },
    { lang_name: "Walletconnect", icon: `${Walletconnect}`, exp_level: "high" },
  ]

  const Fritems = fricons?.map((details4) => {
    return (
      <div className="mylang" title={details4.lang_name} key={details4.id}>
        <div className="lang-info">
          <div className="lang-img">
            <img src={details4.icon} alt="" />
          </div>
          <h3>{details4.lang_name}</h3>
        </div>
      </div>
    );
  });

  const Bcitems = Bcicons?.map((details4) => {
    return (
      <div className="mylang" title={details4.lang_name} key={details4.id}>
        <div className="lang-info">
          <div className="lang-img">
            <img src={details4.icon} alt="" />
          </div>
          <h3>{details4.lang_name}</h3>
        </div>
      </div>
    );
  });

  const Blockitems = Blockicons?.map((details4) => {
    return (
      <div className="mylang" title={details4.lang_name} key={details4.id}>
        <div className="lang-info">
          <div className="lang-img">
            <img src={details4.icon} alt="" />
          </div>
          <h3>{details4.lang_name}</h3>
        </div>
      </div>
    );
  });
  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>My Skills Progress so far</h2>

            <h3>Frontend</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={Fritems}
                responsive={responsive}
              />
            </div>
          </div>
          <div className="progress-title">
            <h3>Backend</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={Bcitems}
                responsive={responsive}
              />
            </div>
          </div>
          <div className="progress-title">
            <h3>Blockchain</h3>
          </div>
          <div className="progress-row2">
            <div className="lang">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={Blockitems}
                responsive={responsive}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skillbar;
