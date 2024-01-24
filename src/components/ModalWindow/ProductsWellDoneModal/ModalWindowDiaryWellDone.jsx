import * as React from 'react';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import sprite from '../../../images/sprite.svg';
import {
  CaloriesWrapp,
  CustomColor,
  CustomWrapper,
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
  return (
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
          <CustomWrapper>
            Calories: <CustomColor>{numberOfCalories}</CustomColor>
          </CustomWrapper>
        </CaloriesWrapp>

        <NextProductBtn
          type="button"
          onClick={() => setProductsWellDoneIsModalOpen(false)}
        >
          <p>Next product</p>
        </NextProductBtn>

        <LinkToDiary to="/diary">
          To the diary
          <SvgArrow>
            <use href={`${sprite}#arrow-white`}></use>
          </SvgArrow>
        </LinkToDiary>
      </ModalStyle>
    </Modal>
  );
}
