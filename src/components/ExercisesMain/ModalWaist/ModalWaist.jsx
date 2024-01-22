import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
  ButtonCloseModal,
  ExerciseContent,
  Gif,
  ModalStyles,
  ModalWrapp,
} from './ModalWaist.styled';
import { useParams } from 'react-router-dom';
import { getAllExercises } from 'api/ApiExercises';
import ModalWaistList from './ModalWaistList';
import sprite from '../../../images/sprite.svg';
import CountdownTimer from './CountdownTimer';

const ModalWaist = ({ filter, isOpen, closeModal, id }) => {
  const { body_parts, muscles, equipmentId } = useParams();
  const [allExercises, setExercises] = useState([]);

  const fetchAllExercises = async () => {
    try {
      const exercises = await getAllExercises(
        filter,
        body_parts || muscles || equipmentId
      );
      setExercises(exercises);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllExercises();
    // eslint-disable-next-line
  }, []);

  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <ModalWrapp>
        <ButtonCloseModal onClick={closeModal}>
          <svg>
            <use href={`${sprite}#icon-x`} />
          </svg>
        </ButtonCloseModal>

        {allExercises.map(
          (exercise, index) =>
            exercise._id === id && (
              <div className="ExerciseItemt" key={index}>
                <ExerciseContent>
                  <Gif src={exercise.gifUrl} alt={exercise.name} />
                  <ModalWaistList
                    name={exercise.name}
                    bodypart={exercise.bodyPart}
                    target={exercise.target}
                    equipment={exercise.equipment}
                  />
                </ExerciseContent>
                <CountdownTimer
                  customKey={exercise._id}
                  timer={3}
                  handleTime={() => {}}
                  dynamicBurnCal={0}
                />
              </div>
            )
        )}
      </ModalWrapp>
    </Modal>
  );
};

export default ModalWaist;
