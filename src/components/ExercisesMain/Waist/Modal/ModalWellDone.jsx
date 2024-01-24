import React from "react";
import Modal from "react-modal";
import {
  // ButtonCloseModal,
  CaloriesWrapp,
  ModalStyle,
  ModalStyles,
  SvgIconX,
  WellDoneText,
} from "./ModalWellDone.styled";
// import thumb_up from "../../../../images/thumb_up.png";
import sprite from "../../../../images/sprite.svg";
import { Button } from "@mui/material";
import { SettingsInputCompositeOutlined } from "@mui/icons-material";
const ModalWellDone = ({
  isOpen,
  closeModal,
  onSendClick,
  isModalOpen,
  setIsModalOpen,
  amountOfTime,
  numberOfBurnedCalories,
}) => {
  // const [isOpen, setOpen] = React.useState(false);
  // const handleOpen = () => SettingsInputCompositeOutlined(true);
  // const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
        <ModalStyle>
          <div>
            {/* <div onClick={() => setOpen(false)}> */}
            icon-x
            <SvgIconX>
              <use href={`${sprite}#icon-x`}></use>
            </SvgIconX>
          </div>

          {/* <div>
          img
          <img src={thumb_up} alt="thumb_up" />
        </div> */}

          <WellDoneText>Well Done</WellDoneText>

          <CaloriesWrapp>
            <div>Your time: </div> {amountOfTime}
          </CaloriesWrapp>

          <CaloriesWrapp>
            <div>Burned calories: </div> {numberOfBurnedCalories}
          </CaloriesWrapp>

          {/* <NextProductBtn type="button">
            <Link to="/exercises">Next exercise</Link>
          </NextProductBtn> */}

          {/* <LinkToDiary to="/diary">
            To the diary
            {/* <Svg>
              <use href={`${sprite}#arrow-white`}></use>
            </Svg> 
          </LinkToDiary> */}
        </ModalStyle>
      </Modal>
    </div>
  );
};

export default ModalWellDone;
