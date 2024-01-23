import * as React from 'react';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import sprite from '../../../images/sprite.svg';
import {
  CaloriesWrapp,
  CustomColor,
  CustomWrapper,
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
  setIsModalBasicExserciseOpen,
  remaningTime,
  burnedCalories,
}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setIsModalBasicExserciseOpen(false);
  const minutes = Math.floor(remaningTime / 60);
  const seconds = remaningTime % 60;

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal Exercise Well Done</Button> */}
      <Modal open={isModalOpen} onClose={handleClose}>
        <ModalStyle>
          <div onClick={() => setIsModalBasicExserciseOpen(false)}>
            <SvgIconX>
              <use href={`${sprite}#icon-x`}></use>
            </SvgIconX>
          </div>

          <div>
            <img src={thumb_up} alt="thumb_up" />
          </div>

          <WellDoneText>Well Done</WellDoneText>

          <CaloriesWrapp>
            <CustomWrapper>
              Your time:{' '}
              <CustomColor>
                {minutes}:{seconds}
              </CustomColor>
            </CustomWrapper>
          </CaloriesWrapp>

          <CaloriesWrapp>
            <CustomWrapper>
              Burned calories: <CustomColor>{burnedCalories}</CustomColor>
            </CustomWrapper>
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
