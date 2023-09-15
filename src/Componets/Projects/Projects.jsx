import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Projects.css";

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
      about_avatar: "hello",
      language_used: "react,js,python",
      Project_title: "Nft marketplace",
      Project_info: "Nft marketplace",
      demo_link: "https://loacahost:3000",
      project_link: "hello",
    },
    {
      about_avatar: "hello",
      language_used: "react,js,python",
      Project_title: "Nft marketplace",
      Project_info: "Nft marketplace",
      demo_link: "https://loacahost:3000",
      project_link: "hello",
    },
    {
      about_avatar: "hello",
      language_used: "react,js,python",
      Project_title: "Nft marketplace",
      Project_info: "Nft marketplace",
      demo_link: "https://loacahost:3000",
      project_link: "hello",
    },
    {
      about_avatar: "hello",
      language_used: "react,js,python",
      Project_title: "Nft marketplace",
      Project_info: "Nft marketplace",
      demo_link: "https://loacahost:3000",
      project_link: "hello",
    },
    
  ];
  const img_300 = "http://drive.google.com/uc?id=";
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
                    src={`${img_300}${details.about_avatar}`}
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
