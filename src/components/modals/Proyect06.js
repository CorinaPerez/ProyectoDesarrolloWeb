import React from "react";
import image from "../../assets/image/screenshot/simon-says-baner.png";
import Proyect from "./Proyect";
const URL =
  "https://github.com/CorinaPerez/Menu-Arqui.git/";
const urlRepo =
  "https://github.com/CorinaPerez/Menu-Arqui.git";

const Proyect06 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Simon Says"
      // proyectDesc="A recreation of the addictive simon says game, perfect to relax for
      //       a while playing, on the pc or on the cell phone."
      proyectDesc="Una recreación del adictivo juego simon says, perfecto para relajarse un rato jugando desde la computadora o celular."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, Git/Github."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect06;
