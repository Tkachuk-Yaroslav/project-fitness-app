import * as React from 'react';
// import Button from '@mui/material/Button';
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
  isProductsWellDoneModalOpen,
  setProductsWellDoneIsModalOpen,
  numberOfCalories,
}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal Diary Well Done</Button> */}
      <Modal
        open={isProductsWellDoneModalOpen}
        onClose={setProductsWellDoneIsModalOpen}
      >
        <ModalStyle>
          <div onClick={() => setProductsWellDoneIsModalOpen(false)}>
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
