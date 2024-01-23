import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  Button,
  ButtonCloseModal,
  ExerciseContent,
  ExerciseWrapper,
  Gif,
  ModalStyles,
  ModalWrapp,
  SvgIconClose,
} from "./ModalWaist.styled";
import { useParams } from "react-router-dom";
import { getAllExercises } from "api/ApiExercises";
import ModalWaistList from "./ModalWaistList";
import sprite from "../../../images/sprite.svg";
import CountdownTimer from "./CountdownTimer/CountdownTimer";


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
          <SvgIconClose>
            <use href={`${sprite}#icon-x`} />
          </SvgIconClose>
        </ButtonCloseModal>

        {allExercises.map(
          (exercise, index) =>
            exercise._id === id && (
              <div className="ExerciseItemt" key={index}>
                <ExerciseWrapper>
                <Gif src={exercise.gifUrl} alt={exercise.name} />
                  <CountdownTimer
                  timer={`${exercise.time}`}
                  handleTime={() => {}}
                  dynamicBurnCal={`${exercise.burnedCalories}`}
                />
                </ExerciseWrapper>
                <ExerciseContent>
                  <ModalWaistList
                    name={exercise.name}
                    bodypart={exercise.bodyPart}
                    target={exercise.target}
                    equipment={exercise.equipment}
                  />
                  <Button type="button">
                   Add to diary
                  </Button>
                </ExerciseContent>

                
              </div>
            )
        )}
      </ModalWrapp>
    </Modal>
  );
};

export default ModalWaist;
