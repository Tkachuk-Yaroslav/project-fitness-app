// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import "overlayscrollbars/overlayscrollbars.css";
// import {
//   ButtonCloseModal,
//   ExerciseContent,
//   Gif,
//   ModalStyles,
//   ModalWrapp,
//   Svg,
//   ContentWrap,
//   AddBtn,
// } from "./ModalWaist.styled";
// import { useParams } from "react-router-dom";
// import { getAllExercises } from "api/ApiExercises";
// import ModalWaistList from "./ModalWaistList";
// import sprite from "../../../images/sprite.svg";
// import CountdownTimer from "./CountdownTimer/CountdownTimer";
// import "./stylesModal.css";

// const ModalWaist = ({ filter, isOpen, closeModal, id }) => {
//   const { body_parts, muscles, equipmentId } = useParams();
//   const [allExercises, setExercises] = useState([]);
//   const [selectedExercise, setSelectedExercise] = useState(null);

//   const fetchAllExercises = async () => {
//     try {
//       const exercises = await getAllExercises(
//         filter,
//         body_parts || muscles || equipmentId
//       );
//       setExercises(exercises);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchAllExercises();
//     // eslint-disable-next-line
//   }, []);

//   const handleSubmit = () => {
//     const currentBurnedCalories = localStorage.getItem("calories");
//     const currentTimes = 180 - Number(localStorage.getItem("time"));

// //     const exerciseData = {
// //   exerciseId: '64f2458d6f67bc34bae4f801',
// //   date: '2024-01-17T13:57:32.000Z',
// //   time: 2,
// //   calories: 154,
// // };
// const fetchPostExercises = async () => {
// try {
//   const result = await addExerciseToDairy(data);
//   console.log('Exercise added to dairy successfully:', result);
// } catch (error) {
//   console.error('Failed to add exercise to dairy:', error);
// }

//     const data = {
//       exerciseId: selectedExercise._id,
//       date: new Date(),
//       time: currentTimes,
//       calories: currentBurnedCalories,
//     };

//     console.log(data, "Обєкт пост запитом на бек");
//   };

//   return (
//     <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
//       <ModalWrapp>
//         <ButtonCloseModal onClick={closeModal}>
//           <Svg>
//             <use href={`${sprite}#icon-x-modal`} />
//           </Svg>
//         </ButtonCloseModal>

//         {allExercises.map(
//           (exercise, index) =>
//             exercise._id === id && (
//               <div
//                 className="ExerciseItemt"
//                 key={index}
//                 onClick={() => setSelectedExercise(exercise)}
//               >
//                 <ExerciseContent>
//                   <Gif src={exercise.gifUrl} alt={exercise.name} />
//                   <ContentWrap>
//                     <ModalWaistList
//                       name={exercise.name}
//                       bodypart={exercise.bodyPart}
//                       target={exercise.target}
//                       equipment={exercise.equipment}
//                     />
//                     <CountdownTimer
//                       timer={`${exercise.time}`}
//                       handleTime={() => {}}
//                       dynamicBurnCal={`${exercise.burnedCalories}`}
//                     />
//                   </ContentWrap>
//                   <AddBtn type="button" onClick={handleSubmit}>
//                     Add to diary
//                   </AddBtn>
//                 </ExerciseContent>
//               </div>
//             )
//         )}
//       </ModalWrapp>
//     </Modal>
//   );
// };

// export default ModalWaist;

// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
// import "overlayscrollbars/overlayscrollbars.css";
// import {
//   ButtonCloseModal,
//   ExerciseContent,
//   Gif,
//   ModalStyles,
//   ModalWrapp,
//   Svg,
//   ContentWrap,
//   AddBtn,
// } from "./ModalWaist.styled";
// import { useParams } from "react-router-dom";
// import { getAllExercises, addExerciseToDairy } from "api/ApiExercises";
// import ModalWaistList from "./ModalWaistList";
// import sprite from "../../../images/sprite.svg";
// import CountdownTimer from "./CountdownTimer/CountdownTimer";
// import "./stylesModal.css";

// const ModalWaist = ({ filter, isOpen, closeModal, id }) => {
//   const { body_parts, muscles, equipmentId } = useParams();
//   const [allExercises, setExercises] = useState([]);
//   const [selectedExercise, setSelectedExercise] = useState(null);

//   const fetchAllExercises = async () => {
//     try {
//       const exercises = await getAllExercises(
//         filter,
//         body_parts || muscles || equipmentId
//       );
//       setExercises(exercises);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchAllExercises();
//     // eslint-disable-next-line
//   }, []);

//   const handleSubmit = async () => {
//     const currentBurnedCalories = localStorage.getItem("calories");
//     const currentTimes = 180 - Number(localStorage.getItem("time"));

//     const data = {
//       exerciseId: selectedExercise._id,
//       date: new Date(),
//       time: currentTimes,
//       calories: currentBurnedCalories,
//     };

//     const fetchPostExercises = async () => {
//       try {
//         const result = await addExerciseToDairy(data);
//         console.log("Exercise added to dairy successfully:", result);
//       } catch (error) {
//         console.error("Failed to add exercise to dairy:", error);
//       }
//     };

//     console.log(data, "Object for backend post request");
//     fetchPostExercises();
//   };

//   return (
//     <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
//       <ModalWrapp>
//         <ButtonCloseModal onClick={closeModal}>
//           <Svg>
//             <use href={`${sprite}#icon-x-modal`} />
//           </Svg>
//         </ButtonCloseModal>

//         {allExercises.map(
//           (exercise, index) =>
//             exercise._id === id && (
//               <div
//                 className="ExerciseItemt"
//                 key={index}
//                 onClick={() => setSelectedExercise(exercise)}
//               >
//                 <ExerciseContent>
//                   <Gif src={exercise.gifUrl} alt={exercise.name} />
//                   <ContentWrap>
//                     <ModalWaistList
//                       name={exercise.name}
//                       bodypart={exercise.bodyPart}
//                       target={exercise.target}
//                       equipment={exercise.equipment}
//                     />
//                     <CountdownTimer
//                       timer={`${exercise.time}`}
//                       handleTime={() => {}}
//                       dynamicBurnCal={`${exercise.burnedCalories}`}
//                     />
//                   </ContentWrap>
//                   <AddBtn type="button" onClick={handleSubmit}>
//                     Add to diary
//                   </AddBtn>
//                 </ExerciseContent>
//               </div>
//             )
//         )}
//       </ModalWrapp>
//     </Modal>
//   );
// };

// export default ModalWaist;

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
import BasicModalExercise from "./ModalWindowExerciseWellDone";

const ModalWaist = ({ filter, isOpen, closeModal, id }) => {
  const currentBurnedCalories = localStorage.getItem("calories");
  const currentTimes = 180 - Number(localStorage.getItem("time"));
  const { body_parts, muscles, equipmentId } = useParams();
  const [allExercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isExerciseAdded, setIsExerciseAdded] = useState(true);

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

  useEffect(() => {
    fetchAllExercises();

    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {
    const currentBurnedCalories = localStorage.getItem("calories");
    const currentTimes = 180 - Number(localStorage.getItem("time"));

    const data = {
      exerciseId: selectedExercise._id,
      date: new Date(),
      time: currentTimes,
      calories: currentBurnedCalories,
    };

    const fetchPostExercises = async () => {
      try {
        const result = await addExerciseToDairy(data);
        console.log("Exercise added to dairy successfully:", result);
        setIsExerciseAdded(true);
      } catch (error) {
        console.error("Failed to add exercise to dairy:", error);
      }
    };
    console.log("isExerciseAdded=", isExerciseAdded);
    console.log(data, "Object for backend post request");
    fetchPostExercises();
    // fetchPostExercises();
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
                      handleTime={() => {}}
                      dynamicBurnCal={`${exercise.burnedCalories}`}
                    />
                  </ContentWrap>
                  <AddBtn type="button" onClick={handleSubmit}>
                    Add to diary
                  </AddBtn>
                  <button
                    type="button"
                    onClick={BasicModalExercise}
                    // isModalOpen={isExerciseAdded}
                  >
                    open
                  </button>
                </ExerciseContent>
              </div>
            )
        )}
        {isExerciseAdded && (
          <BasicModalExercise
            isModalOpen={isExerciseAdded}
            setIsModalOpen={setIsExerciseAdded}
            amountOfTime={currentTimes}
            numberOfBurnedCalories={currentBurnedCalories}
          />
        )}
      </ModalWrapp>
    </Modal>
  );
};

export default ModalWaist;
