import React, { useEffect } from "react";
//import logoGithub from "../assets/image/github (3).png";
//import logoFacebook from "../assets/image/facebook.png";
//import logoTwitter from "../assets/image/twitter.png";
//import HeroButton from "./HeroButton";
//import HeroSocial from "./HeroSocial";
import "./styles/Hero.css";
//const linkedinLink = "https://www.facebook.com/corina.gonzales.79677?mibextid=ZbWKwL";
//const gihubLink = "https://github.com/CorinaPerez";
//const twitterLink = "hhttps://instagram.com/corina_g10?igshid=NGVhN2U2NjQ0Yg==";

const Hero = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])


  return (
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" data-rellax-speed={-7} />
      <div className="row s-hero__content">
        <div className="column">
          <div className="s-hero__content-about">
            <h1>
              <span className="font-500">Corina Perez Gonzalez</span>
            </h1>
            <h3>
              <span>Mis Lenguajes de programacion</span>
              <br />
              <span>JavaScript | Node JS | Python | CSS</span>
            </h3>
            <div className="s-hero__content-social">
              {/* <HeroSocial
                href={linkedinLink}
                src={logoFacebook}
                alt="logo de linkedin"
                title="LinkedIn"
              /> */}
              {/* <HeroSocial
                href={gihubLink}
                src={logoGithub}
                alt="logo de github"
                title="Github"
              /> */}
              {/* <HeroSocial
                href={twitterLink}
                src={logoTwitter}
                alt="logo de telegram"
                title="Twitter"
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="s-hero__scroll links">
        <HeroButton
          path="/contact"
          // text="Hire Me"
          text="Contacto"
        />
        <HeroButton
          path="/portfolio"
          //text="Explore Me"
          text="Mis proyectos"
        />
      </div> */}
    </section>
  );
};

export default Hero;
