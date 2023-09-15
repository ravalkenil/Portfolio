import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Skillbar.css";


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

    const icons =[{lang_name:"javascript",icon:"helo",exp_level:"high" },{lang_name:"javascript",icon:"helo",exp_level:"high" },{lang_name:"javascript",icon:"helo",exp_level:"high" }]

    const items = icons?.map((details4) => {
        return (
          <div className="mylang" title={details4.lang_name} key={details4.id}>
            <div className="lang-info">
              <div className="lang-img">
                <img src={details4.icon} alt="" />
              </div>
              <h3>{details4.lang_name}</h3>
              <p className={`${details4.exp_level}`}>{details4.exp_level}</p>
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

            <h3>My Skills</h3>
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
                items={items}
                responsive={responsive}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skillbar