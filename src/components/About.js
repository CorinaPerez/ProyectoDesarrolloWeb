import React, { useEffect } from "react";
import Skills from "./Skills";
import userPhoto from "../assets/image/foto.jpg";
import "./styles/About.css";

const About = () => {

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
    <React.Fragment>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={userPhoto} alt="user avatar" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h1 className="about-me">
              <span className="about-description font-500">Acerca de mi</span>
            </h1>
            <div>
              <p className="about-description">
                Mi nombre es Corina Perez Gonzalez y soy estudiante de la carrera de Ingenieria en sistemas en la Universidad Mariano Galvez de Guatemala. Actualmente estoy en el Octavo Ciclo de mi carrera. Ingrese a la carrera de Ingenieria en Sistemas en el 2020. Uno de mis objetivos es desarrollar las capacidades y habilidades requeridas para modelar, diseñar, construir y evaluar las soluciones informaticas, tambien otro de mis objetivos especilizarme en ciberseguridad y en Front-End.        </p>
            </div>
            <hr size="8px" color="white" />
            <h2 className="about-me">
              <span className="about-description font-500">
                Pasatiempos Favoritos
              </span>
            </h2>
            <br />
            <p className="about-description">
              
              En mis tiempos libres me gusta escuchar musica, ver peliculas o series, leer especialmente documentales sobre la arqueologia e historia y tambien en alguna ocasiones juego algun videojuego. 
            </p>
            <br />
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack cv">
                {/* <a
                  id="btn-donwload-cv"
                  className="btn btn--download btn-donwload"
                  href={CV}
                  download="Corina_Perez_CV"
                >
                  Download CV
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
    </React.Fragment>
  );
};

export default About;
