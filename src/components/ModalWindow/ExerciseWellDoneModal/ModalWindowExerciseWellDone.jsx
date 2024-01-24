import React, { useEffect } from 'react';
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
import toast from 'react-hot-toast';

export default function BasicModalExercise({
  isModalOpen,
  setIsModalBasicExserciseOpen,
  remaningTime,
  burnedCalories,
}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);

  useEffect(() => {
    if (isModalOpen) {
      toast.success('Ok!', {
        duration: 3000,
        position: 'top-center',
      });
      console.log('test');
    }
  }, [isModalOpen]);

  const handleClose = () => {
    setIsModalBasicExserciseOpen(false);
  };

  const diffTime = 180 - remaningTime;
  const minutes = Math.floor(diffTime / 60);
  const seconds = diffTime % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
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
              {formattedMinutes}:{formattedSeconds} minutes
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
  );
}
