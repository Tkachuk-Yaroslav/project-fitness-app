import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import {
  ButtonCloseModal,
  ExerciseContent,
  Gif,
  ModalStyles,
  ModalWrapp,
  Svg,
  ContentWrap,
  AddBtn,
} from './ModalWaist.styled';
import { useParams } from 'react-router-dom';
import { getAllExercises } from 'api/ApiExercises';
import ModalWaistList from './ModalWaistList';
import sprite from '../../../images/sprite.svg';
import CountdownTimer from './CountdownTimer';
import './stylesModal.css';

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
          <Svg>
            <use href={`${sprite}#icon-x-modal`} />
          </Svg>
        </ButtonCloseModal>

        {allExercises.map(
          (exercise, index) =>
            exercise._id === id && (
              <div className="ExerciseItemt" key={index}>
                {/* <ExerciseContent>
                  <Gif src={exercise.gifUrl} alt={exercise.name} />
                  <ModalWaistList
                    name={exercise.name}
                    bodypart={exercise.bodyPart}
                    target={exercise.target}
                    equipment={exercise.e
                      quipment}
                  /> */}

                <ExerciseContent>
                  <Gif src={exercise.gifUrl} alt={exercise.name} />
                  <ContentWrap>
                    <ModalWaistList
                      name={exercise.name}
                      bodypart={exercise.bodyPart}
                      target={exercise.target}
                      equipment={exercise.equipment}
                    />
                    <CountdownTimer
                      timer={`${exercise.time}`}
                      handleTime={() => {}}
                      dynamicBurnCal={`${exercise.burnedCalories}`}
                    />
                  </ContentWrap>
                  <AddBtn>Add to diary</AddBtn>
                </ExerciseContent>
              </div>
            )
        )}
      </ModalWrapp>
    </Modal>
  );
};

export default ModalWaist;
