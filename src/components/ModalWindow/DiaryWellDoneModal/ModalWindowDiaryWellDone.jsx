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
  SvgArrow,
  SvgIconX,
  WellDoneText,
} from './ModalWindowDiaryWellDone.styled';
import avocado from '../../../images/avocado.png';

export default function BasicModalDiaryWellDone({
  isModalOpen,
  setIsModalOpen,
  numberOfCalories,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal Diary Well Done</Button>
      <Modal open={open} onClose={handleClose}>
        <ModalStyle>
          <div onClick={() => setOpen(false)}>
            <SvgIconX>
              <use href={`${sprite}#icon-x`}></use>
            </SvgIconX>
          </div>

          <div>
            <img src={avocado} alt="avocado" />
          </div>

          <WellDoneText>Well Done</WellDoneText>

          <CaloriesWrapp>
            <div>Calories: </div> {numberOfCalories}
          </CaloriesWrapp>

          <NextProductBtn type="button">
            <Link to="/diary">Next product</Link>
          </NextProductBtn>

          <LinkToDiary to="/diary">
            To the diary
            <SvgArrow>
              <use href={`${sprite}#arrow-white`}></use>
            </SvgArrow>
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
