// ButtonCloseModal, ModalStyles;

import styled from 'styled-components';

const ButtonCloseModal = styled.button`
  display: flex;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  line-height: 0;
  cursor: pointer;
  background-color: orange;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  transition-property: background-color, border-color;
  /* transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-timing-function); */
`;

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    width: '440px',
    height: '632px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalWrapp = styled.div`
  color: black;
`;
export { ButtonCloseModal, ModalStyles, ModalWrapp };
