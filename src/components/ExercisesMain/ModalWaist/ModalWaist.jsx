import React from 'react';
import Modal from 'react-modal';

import { ButtonCloseModal, ModalStyles } from './ModalWaist.styled';
import BasicModalDiaryWellDone from 'components/ModalWindow/DiaryWellDoneModal/ModalWindowDiaryWellDone';
import BasicModalExercise from 'components/ModalWindow/ExercisesWellDoneModal/ModalWindowExerciseWellDone';

const ModalWaist = ({ isOpen, closeModal }) => {
  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
      {/* <ModalContent closeModal={closeModal} /> */}

      <div>
        {/* <ButtonCloseModal onClick={closeModal}>X</ButtonCloseModal>
        <BasicModalDiaryWellDone>
          <button type="button">Modal</button>
        </BasicModalDiaryWellDone>
        <BasicModalExercise>
          <button type="button">Modal</button>
        </BasicModalExercise> */}
        <h2> Название модального окна</h2>
        <p>Текст модального окна</p>
      </div>
    </Modal>
  );
};

export default ModalWaist;
