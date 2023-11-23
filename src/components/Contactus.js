import React, { useEffect } from "react";
import "./styles/Contactus.css";
import Form from "./Form";


const Contactus = () => {

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
    <section id="contact" className="s-contact target-section">
      <div className="row s-contact__header">
        <div className="column large-12">
          <h3 className="section-header-allcaps">
            <span className="black-background">{/*Say Hello*/}Contáctame</span>
          </h3>
        </div>
      </div>
      <div className="row s-contact__content">
        <div className="column large-7 medium-12">
          <h4 className="huge-text">
            <span className="black-background">
              {/* Let's start a new project together, I want to collaborate to
                materialize that idea into a successful project. */}
              {/* Estoy listo para iniciar un nuevo proyecto y ayudarte a llevar a
              cabo tu idea. */}
            </span>
          </h4>
          <Form />
        </div>
        <div className="column large-4 medium-12">
          <div className="row contact-infos">
            <div
              className="column large-12 medium-6 tab-12"
              id="ContactNetwork-Container"
            >
              <div className="contact-block">
                
                {/* <ContactNetwork
                  stiker={linkedinStiker}
                  alt="linkedin-Stiker"
                  title="Linkedin"
                  header="Linkedin"
                  href={linkedinLink}
                  target="_blank"
                  linkName="Corina Perez"
                /> */}
                {/* <ContactNetwork
                  stiker={githubStiker}
                  alt="github-Stiker"
                  title="Github"
                  header="Github"
                  href={githubLink}
                  target="_blank"
                  linkName="@corinagonzalez"
                /> */}
                {/* <ContactNetwork
                  stiker={twitterStiker}
                  alt="twitter-Stiker"
                  title="Twitter"
                  header="Twitter"
                  href={twitterLink}
                  target="_blank"
                  linkName="@corinagonzalez"
                /> */}
                
                {/* <ContactNetwork
                  stiker={telegranStiker}
                  alt="telegram-Stiker"
                  title="Telegram"
                  header="Telegram"
                  href={telegramLink}
                  target="_blank"
                  linkName="@corinagonzalez"
                /> */}
                {/* <ContactNetwork
                  stiker={torreStiker}
                  alt="torre-Stiker"
                  title="Torre"
                  header="Torre"
                  href={torreLink}
                  target="_blank"
                  linkName="corina perez"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
