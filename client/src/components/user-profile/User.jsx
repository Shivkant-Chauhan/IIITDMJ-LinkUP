import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import "./user.scss";
import user from "../../images/user.jpg"

function User() {
  const [toggleExperienceDesc, setToggleExperienceDesc] = useState(false);
  const [toggleProjectDesc, setToggleProjectDesc] = useState(false);

  return (
    <>
      <div className="user">
        <div className="userInfo">
          <div className="user-img">
            <img src={ user } alt="user profile d" />
          </div>
          <div className="user-details">
            <div className="user-name">Dummy Name</div>
            <div className="user-college">college name details updated as with backend calls</div>
            <div className="user-bio">extra details user weant to display below name- just like linkedin</div>
            <div className="tech-stack">Tech Stack</div>
            <div className="user-tech">
              {/* will be fetched using Store (inside a map) -> will be updated one time on time of authentication! */}
              <span className="tech-items">React JS</span>
              <span className="tech-items">Angular</span>
              <span className="tech-items">Typescript/Javascript</span>
              <span className="tech-items">NodeJS</span>
              <span className="tech-items">Django</span>
              <span className="tech-items">Git</span>
              <span className="tech-items">Github</span>
              <span className="tech-items">C/C++</span>
              <span className="tech-items">React JS</span>
              <span className="tech-items">Angular</span>
              <span className="tech-items">Typescript/Javascript</span>
              <span className="tech-items">NodeJS</span>
              <span className="tech-items">Django</span>
              <span className="tech-items">Git</span>
              <span className="tech-items">Github</span>
              <span className="tech-items">C/C++</span>
              {/* will be fetched using Store (inside a map) -> will be updated one time on time of authentication! */}
            </div>
          </div>
        </div>
      </div>

      <div className="user-experience">
        <div className="exp-heading">Experiences</div>
        <div className="exp-subHeading">Worked In</div>

        {/* this will be rendered using API calls within a for loop/map */}
        <div className="exp-details">
          <div className="exp-header" onClick={() => {setToggleExperienceDesc(!toggleExperienceDesc)}}>
            <div className="exp-name-timeline">
              <span className="exp-name">XYZ ORGANISATION</span>
              <span className="exp-timeline">Sept 2021 - Sept 2022</span>
            </div>
            {toggleExperienceDesc && <IoIosArrowDown className="arrow" />}
            {!toggleExperienceDesc && <IoIosArrowForward className="arrow" />}
          </div>
          {toggleExperienceDesc &&
          <div className="exp-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illo nostrum dicta veniam accusamus, incidunt vel. Saepe maiores velit assumenda ex dolorem voluptatem distinctio. Tempora, praesentium veniam distinctio eos deleniti necessitatibus blanditiis ipsam sunt quod fuga? Dolores exercitationem nobis ratione quia magnam neque eligendi, ullam, veniam numquam quos adipisci unde?
            <li> </li>
            <li> </li>
          </div>
          }
        </div>

        <div className="exp-details">
          <div className="exp-header" onClick={() => {setToggleExperienceDesc(!toggleExperienceDesc)}}>
            <div className="exp-name-timeline">
              <span className="exp-name">XYZ ORGANISATION</span>
              <span className="exp-timeline">Sept 2021 - Sept 2022</span>
            </div>
            {toggleExperienceDesc && <IoIosArrowDown className="arrow" />}
            {!toggleExperienceDesc && <IoIosArrowForward className="arrow" />}
          </div>
          {toggleExperienceDesc &&
          <div className="exp-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illo nostrum dicta veniam accusamus, incidunt vel. Saepe maiores velit assumenda ex dolorem voluptatem distinctio. Tempora, praesentium veniam distinctio eos deleniti necessitatibus blanditiis ipsam sunt quod fuga? Dolores exercitationem nobis ratione quia magnam neque eligendi, ullam, veniam numquam quos adipisci unde?
            <li> </li>
            <li> </li>
          </div>
          }
        </div>
        {/* this will be rendered using API calls within a for loop/map */}
      </div>
      
      <div className="user-projects">
        <div className="profile-heading">Projects</div>

        {/* this will be rendered using API calls within a for loop/map */}
        <div className="project-details">
          <div className="project-header" onClick={() => {setToggleProjectDesc(!toggleProjectDesc)}}>
            <div className="project-name">Project NAME</div>
            {toggleProjectDesc && <IoIosArrowDown className="arrow" />}
            {!toggleProjectDesc && <IoIosArrowForward className="arrow" />}
          </div>
          <div className="links" onClick={() => {setToggleProjectDesc(!toggleProjectDesc)}}>
            <a href="https://www.google.com/">LIVE DEMO</a>
            <a href="https://www.github.com/">Github Repo</a>
          </div>

          {toggleProjectDesc &&
          <div className="project-info">
            <div className="project-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illo nostrum dicta veniam accusamus, incidunt vel. Saepe maiores velit assumenda ex dolorem voluptatem distinctio. Tempora, praesentium veniam distinctio eos deleniti necessitatibus blanditiis ipsam sunt quod fuga? Dolores exercitationem nobis ratione quia magnam neque eligendi, ullam, veniam numquam quos adipisci unde?
            </div>
            <div className="project-tech">
              <div className="tech-used">Tech Stack Used: </div>
              <div className="project-tech-stack">
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
                <span className="project-tech-items">ReactJS</span>
              </div>
            </div>

          </div>
          }
        </div>
        {/* this will be rendered using API calls within a for loop/map */}
      </div>
      
      
      <div className="social-profile-info">
        Github <br />
        CodeChef <br />
        Codeforces <br />
        Leetcode <br />
        TAB FEATURES COMING VERY SOON....
      </div>
      {/* // TODO: GITHUB-CODECHEF-CODEFORCES_LEETCODE profiling tabs and the info would be added on the basis of the API, i.e. the info rendered or the details in the tabs will be dependent on those APIs that what information we can fetch using them.! */}
      
    </>
  );
}

export default User;
