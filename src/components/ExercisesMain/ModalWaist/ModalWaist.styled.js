// ButtonCloseModal, ModalStyles;

import styled from 'styled-components';

const ButtonCloseModal = styled.button`
  display: flex;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
<<<<<<< HEAD
  line-height: 0;
  cursor: pointer;
  background-color: black;
  align-items: center;
  justify-content: center;
  transition-property: background-color, border-color;
  color: white;
  & > svg path {
    fill: currentColor;
  }
=======
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
>>>>>>> main
`;

const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
<<<<<<< HEAD
    minWidth: '694px',
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
  align-items: start;
  margin-top: 40px;
  margin-left: 25px;
`;

const Gif = styled.img`
object-fit: cover;
  width: 270px;
  height: 226px;
  border-radius: 12px;`;

const ModalWrapp = styled.div`
  
`;
export { ButtonCloseModal, ModalStyles, ModalWrapp, ExerciseContent, Gif };
=======
    width: '440px',
    height: '632px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export { ButtonCloseModal, ModalStyles };
>>>>>>> main
