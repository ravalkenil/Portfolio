import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Projects.css";

import Img1 from "../images/nftmarketplace_react.png"
import Img2 from "../images/Nft_marketplace_next.png"
import Img3 from "../images/Nftbridge.png"
import Img4 from "../images/Nft1.png"
import Img5 from "../images/auth3.png"
import Img6 from "../images/indexer.png"
import Img7 from "../images/man3.png"



const Projects = () => {

  const responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 1,
    },
    665: {
      items: 2,
    },
    767: {
      items: 2,
    },
    870: {
      items: 3,
    },
    1024: {
      items: 3,
    },
    1265: {
      items: 3,
    },
  };

  const projectsDetails = [
    {
      about_avatar: `${Img1}`,
      language_used: "react,js,solidity,css",
      Project_title: "Nft marketplace with react",
      Project_info: "the premier NFT marketplace where digital art, collectibles, and unique digital assets come to life like never before. Dive into a world where creativity knows no bounds, and ownership is as unique as the blockchain itself. NFTropolis is your one-stop destination for discovering, buying, selling, and showcasing the most extraordinary NFTs",
      demo_link: "https://ntf-marketplace-fontend-ul8i.vercel.app/home",
      project_link: "https://github.com/ravalkenil/Ntf_Marketplace_Fontend",
    },
    {
      about_avatar: `${Img6}`,
      language_used: "Node ,ether js,infura,mongodb",
      Project_title: "ethereum indexer",
      Project_info: "An Ethereum indexer,is a service or software component responsible for indexing and making Ethereum blockchain data easily accessible and queryable. Ethereum indexers play a crucial role in providing developers, DApps, and users with efficient access to blockchain data, including transactions, token transfers, contract events, and more",
      demo_link: "https://github.com/ravalkenil/Etehreum_indexer",
      project_link: "https://github.com/ravalkenil/Etehreum_indexer",
    },
    {
      about_avatar: `${Img2}`,
      language_used: "Next,js,solidity",
      Project_title: "Nft marketplace with next",
      Project_info: "it's a digital destination where innovation, creativity, and blockchain technology converge. Join us in shaping the future of ownership and digital collectibles. Whether you're an artist looking to share your creations or a collector seeking unique assets, NFTropolis welcomes you to an unparalleled world of NFT exploration.",
      demo_link: "https://peppy-truffle-75e20e.netlify.app/",
      project_link: "https://github.com/ravalkenil/Nft_marketplace",
    },
    {
      about_avatar: `${Img3}`,
      language_used: "next,js,solidity,ether js",
      Project_title: "Cross chain Nft bridge",
      Project_info: "the NFT Bridge, your gateway to a multi-chain NFT ecosystem that redefines the boundaries of the digital art and collectibles space. In a world where blockchain diversity is the norm, the NFT Bridge empowers you to seamlessly traverse and transfer NFTs across different blockchain networks, expanding your horizons and unlocking new possibilities for NFT ownership and trading",
      demo_link: "https://github.com/ravalkenil/Cross_chain_nft_bridge",
      project_link: "https://github.com/ravalkenil/Cross_chain_nft_bridge",
    },
    {
      about_avatar: `${Img4}`,
      language_used: "react,solidity,ether js",
      Project_title: "Mint Nft",
      Project_info: "Embark on a journey of creativity, ownership, and digital innovation with our NFT Minting platform. Minting NFTs has never been simpler or more accessible, empowering artists, content creators, and visionaries to tokenize their digital creations and share them with the world. Join us as we redefine the way you create and own digital assets",
      demo_link: "https://mellow-starship-7e313c.netlify.app/home",
      project_link: "https://github.com/ravalkenil/react_NftMarketplace",
    },
    {
      about_avatar: `${Img5}`,
      language_used: "Django,python,firebase,Auth0",
      Project_title: "Token Approval",
      Project_info: "Token approval, in the context of blockchain and decentralized applications (DApps), refers to the process by which a user grants permission for a smart contract or DApp to interact with and spend their tokens on their behalf. This approval mechanism is often used for security and control purposes when interacting with decentralized exchanges (DEXs), lending platforms",
      demo_link: "https://github.com/ravalkenil/Auth0_react",
      project_link: "https://github.com/ravalkenil/Auth0_react",
    },
    {
      about_avatar: `${Img7}`,
      language_used: "Django,python,Ajax",
      Project_title: "Student & faculty management system",
      Project_info: "Django EduManager is a comprehensive student and faculty management system built on the Django framework, designed to streamline the administrative tasks of educational institutions, from schools and colleges to universities. This versatile platform empowers educational administrators, teachers, and staff to efficiently manage student and faculty records and  attendance",
      demo_link: "https://github.com/ravalkenil/Management_system",
      project_link: "https://github.com/ravalkenil/Management_system",
    }
  ];
  
  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>Check Out My Reacet Projects</h2>

        <h3>My Work</h3>
      </div>
      <div className="project-row" >
        {projectsDetails?.length && (
          <OwlCarousel className="owl-theme" responsive={responsive}>
            {projectsDetails?.map((details) => (
              <div className="project" data-aos="fade-up">
                <div className="project-img">
                  <img
                    src={`${details.about_avatar}`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.language_used}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info">{details.Project_info}</p>
                  <div className="project-links">
                    <a
                      href={details.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    <a
                      href={details.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-github" aria-hidden="true"></i> &nbsp;
                        Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
