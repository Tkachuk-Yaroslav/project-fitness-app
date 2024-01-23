// ButtonCloseModal, ModalStyles;

import styled from 'styled-components';

const ButtonCloseModal = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
  background-color: black;
  align-items: center;
  justify-content: center;
  transition-property: background-color, border-color;
  color: white;
  & > svg path {
    fill: currentColor;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    border: '1px solid #efede833',
    borderRadius: '12px',
    maxWidth: '100%', // Ширина контента на мобильных устройствах
    maxHeight: '100%', // Высота контента на мобильных устройствах
    margin: 0, // Убираем внешний отступ
    padding: '20px', // Добавляем внутренний отступ
    display: 'flex',
    flexDirection: 'column', // Используйте 'column' для направления колонки
  },
};


const ExerciseContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
@media screen and (min-width: 768px) {
  min-height: 422px;
  justify-content: space-between;
}
`;
const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const Gif = styled.img`
  object-fit: cover;
  width: 270px;
  height: 226px;
  border-radius: 12px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

const ModalWrapp = styled.div`
display: flex;
flex-wrap: wrap;`;

const SvgIconClose = styled.svg`
  width: 26px;
  height: 26px;
  stroke: #ffffff;
`;

const Button = styled.button`
  display: block;
  padding: 12px 32px;
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  text-align: left;
  background-color: var(--orange-color);
  border-radius: 12px;
  border: 1px solid #e6533c;
  cursor: pointer;
  align-self: flex-start;
  transition: border 0.3s var(--timing-function);

  &:hover,
  &:focus {
    background-color: var(--light-orange-color);
    border: 1px solid var(--light-orange-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    align-self: flex-end;
  }
`;

export {
  ButtonCloseModal,
  ModalStyles,
  ModalWrapp,
  ExerciseContent,
  Gif,
  SvgIconClose,
  ExerciseWrapper,
  Button,
};
