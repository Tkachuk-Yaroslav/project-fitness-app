import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "overlayscrollbars/overlayscrollbars.css";
import {
  ButtonCloseModal,
  ExerciseContent,
  Gif,
  ModalStyles,
  ModalWrapp,
  Svg,
  ContentWrap,
  AddBtn,
} from "./ModalWaist.styled";
import { useParams } from "react-router-dom";
import { getAllExercises, addExerciseToDairy } from "api/ApiExercises";
import ModalWaistList from "./ModalWaistList";
import sprite from "../../../images/sprite.svg";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import "./stylesModal.css";
import toast from "react-hot-toast";
import ModalWellDone from "../Waist/Modal/ModalWellDone";
import Loader from "components/Loader/Loader";
Modal.setAppElement("#root");
const ModalWaist = ({ filter, isOpen, closeModal, id }) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isExerciseAdded, setIsExerciseAdded] = useState(false);
  const [currentTimes, setCurrentTimes] = useState(0); // Declare currentTimes
  const [currentBurnedCalories, setCurrentBurnedCalories] = useState(0); // Declare currentBurnedCalories

  const { body_parts, muscles, equipmentId } = useParams();
  const [allExercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAllExercises = async () => {
      try {
        const exercises = await getAllExercises(
          filter,
          body_parts || muscles || equipmentId
        );
        setExercises(exercises);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAllExercises();

    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {
    const currentBurnedCalories = localStorage.getItem("calories");
    const currentTimes = 180 - Number(localStorage.getItem("time"));
    setCurrentTimes(currentTimes);
    setCurrentBurnedCalories(currentBurnedCalories);
    const data = {
      exerciseId: selectedExercise._id,
      date: new Date(),
      time: currentTimes,
      calories: currentBurnedCalories,
    };

    const fetchPostExercises = async () => {
      try {
        setIsLoading(true);
        await addExerciseToDairy(data);
        console.log(" To add exercise to dairy");
        setIsExerciseAdded(true);
        setIsOrderModalOpen(true);
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to add exercise to dairy", {
          duration: 3000,
          position: "top-center",
        });
      }
    };

    currentTimes
      ? fetchPostExercises()
      : toast.error("Exercise not completed", {
          duration: 3000,
          position: "top-center",
        });
  };

  const handleSendClick = () => {
    setIsOrderModalOpen(false);
    closeModal();

    // Additional logic for 'Send' button click
  };

  return (
    <>
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
                <div
                  className="ExerciseItemt"
                  key={index}
                  onClick={() => setSelectedExercise(exercise)}
                >
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
                    <AddBtn type="button" onClick={handleSubmit}>
                      Add to diary
                    </AddBtn>
                  </ExerciseContent>
                </div>
              )
          )}

          {/* Additional code for ModalWaist */}
          {isExerciseAdded && (
            <ModalWellDone
              isOpen={isOrderModalOpen}
              closeModal={() => setIsOrderModalOpen(false)}
              onSendClick={handleSendClick}
              amountOfTime={currentTimes}
              numberOfBurnedCalories={currentBurnedCalories}
            />
          )}
        </ModalWrapp>
      </Modal>
    </>
  );
};

export default ModalWaist;
