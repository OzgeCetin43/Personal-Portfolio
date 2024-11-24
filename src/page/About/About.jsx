import hero from "../../assets/images/hero-profile.png";
import aboutHero from "../../assets/images/hero.png";
import skill1 from "../../assets/images/skill-1.png";
import skill2 from "../../assets/images/skill-2.png";
import skill3 from "../../assets/images/skill-3.png";
import skill4 from "../../assets/images/skill-4.png";
import skill5 from "../../assets/images/skill-5.png";

import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-title-container">
        <p className="about-subtitle">
          About
          <span>About</span>
          <span>About</span>
          <span>About me</span>
        </p>
        <h1 className="about-title">
          Every great design begin with an even <span>better story</span>
        </h1>
        <h3 className="about-greeting">
          Hi! I'm <span>Charlotte</span>, A Creative Software Developer
        </h3>
        <p className="about-country">From USA.</p>
      </div>
      <div className="about-details-container">
        <div className="about-details">
          <h2>600+</h2>
          <small>Projects Completed</small>
          <p className="about-detail-description">
            Delivering work within time and budget which meets client's
            requirements is in my moto.
          </p>
          <p className="about-detail-description">
            Synergistically seize front-end methods of empowerment without
            extensive core competencies. Progressively repurpose alternative
            platforms.
          </p>
          <div className="about-profile-container">
            <img src={hero} alt="profile" className="hero-profile" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-hero-container">
            <img src={aboutHero} alt="about hero" className="about-image" />
            <div className="about-info">
              <h3>
                Creative Software Developer <span>Charlotte</span>
              </h3>
            </div>
          </div>
          <div className="about-detail">
            <p className="about-detail-description">
              I'm a American based web designer & front-end developer focused on
              crafting clean & user-friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <p className="about-detail-description">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="skills-container">
              <img src={skill1} alt="skill" />
              <img src={skill2} alt="skill" />
              <img src={skill3} alt="skill" />
              <img src={skill4} alt="skill" />
              <img src={skill5} alt="skill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
