import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'overlayscrollbars/overlayscrollbars.css';
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
import { useDispatch } from 'react-redux';
import { setExerciseThunk } from '../../../redux/diary/thunks';
import toast from 'react-hot-toast';

const ModalWaist = ({
  filter,
  isOpen,
  closeModal,
  id,
  openModal,
  remaningTime,
  burnedCalories,
  setRemaningTime,
  setBurnedCalories,
  setIsBasicModalExerciseOpen,
}) => {
  const dispatch = useDispatch();
  const { body_parts, muscles, equipmentId } = useParams();
  const [allExercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

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

  const handleSubmit = async () => {
    const currentDate = `${String(new Date().getDate()).padStart(
      2,
      '0'
    )}/${String(new Date().getMonth() + 1).padStart(
      2,
      '0'
    )}/${new Date().getFullYear()}`;
    const data = {
      exerciseId: selectedExercise._id,
      date: currentDate,
      time: 180 - remaningTime,
      calories: burnedCalories,
    };
    console.log(data);
    const result = await dispatch(setExerciseThunk(data));

    console.log(result);

    if (result.meta.requestStatus === 'rejected') {
      console.log('test');
      toast.error('Exercise not completed', {
        duration: 3000,
        position: 'top-center',
      });
    }

    if (result.meta.requestStatus === 'fulfilled') {
      closeModal();
      setIsBasicModalExerciseOpen(true);
    }
    // Результат можна використовувати тут

    // відправка даних
  };

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
                      handleTime={value => setRemaningTime(value)}
                      handleCalories={setBurnedCalories}
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
      </ModalWrapp>
    </Modal>
  );
};

export default ModalWaist;
