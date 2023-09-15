import React from 'react'
import "./Home.css"
import Img from "../images/decoration/Group-31.png"
import { AiFillGithub,AiOutlineLinkedin } from "react-icons/ai";
import {BsLinkedin ,BsWhatsapp} from "react-icons/bs"
import { FaXTwitter} from "react-icons/fa6"
import Sideimg from "../images/Programmer-pana.png"

const Home = () => {
  return (
    <div>
        <section className=" intro-page" id="home" >
            <div className="decorations">
              <div className="decor-dot2">
                <img src={Img} alt="" />
              </div>
              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3
                      className="hello"
                      data-aos="fade-down"
                      data-aos-duration="1500"
                    >
                      {"Blockchain developer"}
                    </h3>
                    <h3
                      className="name"
                      data-aos="fade-down"
                      data-aos-duration="1600"
                    >
                      Hey! I Am
                    </h3>
                    <h3
                      className="job  text-animate"
                      data-aos="fade-down"
                      data-aos-duration="1700"
                    >
                      {"Kenil raval"}
                    </h3>
                    <p
                      className="myinfo"
                      data-aos="fade-down"
                      data-aos-duration="1800"
                    >
                      {"🔗 Blockchain Developer | Transforming the Digital World 🌐"}
                    </p>
                  </div>
                  <div
                    className="intro-btns"
                    data-aos="fade-up"
                    data-aos-duration="1900"
                  >
                    <a
                      href={`https://app.enhancv.com/share/64418e2a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        Download Cv <i class="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div
                    class="intro-contact"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                            <a
                              href={"https://github.com/ravalkenil"}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={""}><AiFillGithub/></i>
                            </a>
                            <a
                              href={"https://www.linkedin.com/in/kenil-raval-b2094a206/"}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={""}><BsLinkedin/></i>
                            </a>
                            <a
                              href={"https://twitter.com/kenil_raval"}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={""}><FaXTwitter/></i>
                            </a>
                            <a
                              href={"https://wa.me/+918866942449"}
                              className="icon-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={""}><BsWhatsapp/></i>
                            </a>
                      </li>
                    </ul>
                
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-12 left-img "
                  data-aos="fade-down-left"
                >
                  <div className="ff">
                    <img
                      className="intro-img"
                      src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc"
                      alt=""
                    />
                    {/* <img
                      className="intro-img"
                      style={{height:"10%",width:"%"}}
                      src={Sideimg}
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>

  )
}

export default Home