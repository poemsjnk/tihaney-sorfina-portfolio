import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHOm_0RhQB_aA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715908375349?e=1772064000&v=beta&t=Uovam4ADoCKn9p88_EOYjX2MW4-txe2fVrVhyAIymsM" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/poemsjnk" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tihaney-sorfina-5184b3238/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tihaney Sorfina</h1>
          <p>Fintech Student & Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/poemsjnk" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tihaney-sorfina-5184b3238/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;