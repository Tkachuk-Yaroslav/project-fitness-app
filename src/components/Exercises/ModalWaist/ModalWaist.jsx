import React from "react";
import Modal from "react-modal";

import { ButtonCloseModal, ModalStyles } from "./ModalWaist.styled";

const ModalWaist = ({ isOpen, closeModal }) => {
  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
      {/* <ModalContent closeModal={closeModal} /> */}

      <div>
        <ButtonCloseModal onClick={closeModal}>X</ButtonCloseModal>
        <h2> Название модального окна</h2>
        <p>Текст модального окна</p>
      </div>
    </Modal>
  );
};

export default ModalWaist;
