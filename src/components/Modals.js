import React from "react";
import Modal from "./Modal";
import "./styles/Modal.css";
import { useModal } from "./useModal";
import ModalElement from "./modals/ModalElement";

import Modal06 from "../assets/image/screenshot/memo-app-def.jpg";
import Proyect06 from "./modals/Proyect06";
import Modal07 from "../assets/image/screenshot/product-app-def.jpg";
import Proyect07 from "./modals/Proyect07";

import Modal09 from "../assets/image/screenshot/memo-app-def.jpg";
import Proyect09 from "./modals/Proyect09";

const Modals = () => {
  
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  const [isOpenModal7, openModal7, closeModal7] = useModal(false);
  //const [isOpenModal8, openModal8, closeModal8] = useModal(false);
  const [isOpenModal9, openModal9, closeModal9] = useModal(false);
  

  return (
    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
      <ModalElement
        image={Modal09}
        e={openModal9}
        imgTitle="Contador de reacciones"
        imgDesc="Pagina web realizada en React el cual muestra como realizar una publicacion y contiene un boton de me gusta y muestra la cantidad de reacciones"
      />
      <Modal isOpen={isOpenModal9} closeModal={closeModal9}>
        <Proyect09 />
      </Modal>


      <ModalElement
        image={Modal06}
        e={openModal6}
        imgTitle="Menu"
        imgDesc="Se trata de un menu donde nos muestra varias opciones como una conversion de letra de mayuscula a minuscula y fue realizado en el lenguaje de Emu8086"
      />
      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
        <Proyect06 />
      </Modal>

      <ModalElement
        image={Modal07}
        e={openModal7}
        imgTitle="Luces Led"
        imgDesc="Este proyecto fue realizado en arduino, en el cual nos muestra como podemos realizar una secuencia de luces."
      />
      <Modal isOpen={isOpenModal7} closeModal={closeModal7}>
        <Proyect07 />
      </Modal>

      
    </div>
  );
};

export default Modals;

