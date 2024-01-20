import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import sprite from '../../../images/sprite.svg';
import {
  CaloriesWrapp,
  LinkToDiary,
  ModalStyle,
  NextProductBtn,
  Svg,
  SvgIconX,
  WellDoneText,
} from './ModalWindowExerciseWellDone.styled';
import thumb_up from '../../../images/thumb_up.png';

export default function BasicModalExercise({
  isModalOpen,
  setIsModalOpen,
  amountOfTime,
  numberOfBurnedCalories,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal Exercise Well Done</Button>
      <Modal open={open} onClose={handleClose}>
        <ModalStyle>
          <div onClick={() => setOpen(false)}>
            <SvgIconX>
              <use href={`${sprite}#icon-x`}></use>
            </SvgIconX>
          </div>

          <div>
            <img src={thumb_up} alt="thumb_up" />
          </div>

          <WellDoneText>Well Done</WellDoneText>

          <CaloriesWrapp>
            <div>Your time: </div> {amountOfTime}
          </CaloriesWrapp>

          <CaloriesWrapp>
            <div>Burned calories: </div> {numberOfBurnedCalories}
          </CaloriesWrapp>

          <NextProductBtn type="button">
            <Link to="/exercises">Next exercise</Link>
          </NextProductBtn>

          <LinkToDiary to="/diary">
            To the diary
            <Svg>
              <use href={`${sprite}#arrow-white`}></use>
            </Svg>
          </LinkToDiary>
        </ModalStyle>
      </Modal>
    </div>
  );
}

// import React from 'react';
// import { Modal } from 'your-modal-library';

// const ModalComponent = ({ activeModal, isModalOpen, setIsModalOpen }) => {
//   const firstModal = () => {
//     return <div>First Modal Content</div>;
//   };

//   const secondModal = () => {
//     return <div>Second Modal Content</div>;
//   };

//   const thirdModal = () => {
//     return <div>Third Modal Content</div>;
//   };

//   const fourthModal = () => {
//     return <div>Fourth Modal Content</div>;
//   };

//   let modalContent;

//   switch (activeModal) {
//     case 1:
//       modalContent = firstModal();
//       break;
//     case 2:
//       modalContent = secondModal();
//       break;
//     case 3:
//       modalContent = thirdModal();
//       break;
//     case 4:
//       modalContent = fourthModal();
//       break;
//     default:
//       modalContent = <div>Default Modal Content</div>;
//       break;
//   }

//   return (
//     <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//       {modalContent}
//     </Modal>
//   );
// };

// export default ModalComponent;
