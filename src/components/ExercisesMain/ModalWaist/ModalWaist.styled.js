// ButtonCloseModal, ModalStyles;

import styled from 'styled-components';

const ButtonCloseModal = styled.button`
  display: flex;
  position: absolute;
  top: 14px;
  right: 14px;
  /* width: 24px; */
  /* height: 24px; */
  line-height: 0;
  cursor: pointer;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  transition-property: background-color, border-color;
  color: white;
  ba & > svg path {
    fill: currentColor;
  }
`;

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    // width: '335px',
    // height: '788px',

    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    border: '1px solid #efede833',
    borderRadius: '12px',
  },
};

const ExerciseContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: normal;
  }
`;

const Gif = styled.img`
  object-fit: cover;
  width: 270px;
  height: 226px;
  border-radius: 12px;
`;

const ModalWrapp = styled.div``;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 110px;
  }
`;

const Svg = styled.svg`
  width: 23px;
  height: 23px;
  stroke: #efede8;
`;

const AddBtn = styled.button`
  position: absolute;
  width: 150px;
  height: 42px;
  bottom: -72px;
  left: 0px;
  border-radius: 12px;
  background-color: #e6533c;
  font-family: 'RobotoMedium';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  color: #efede8;

  @media screen and (min-width: 768px) {
    bottom: 0px;
    left: 478px;
    height: 52px;
    line-height: calc(24 / 16);
  }
`;

export {
  ButtonCloseModal,
  ModalStyles,
  ModalWrapp,
  ExerciseContent,
  Gif,
  Svg,
  AddBtn,
  ContentWrap,
};
