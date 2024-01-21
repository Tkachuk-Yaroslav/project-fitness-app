// import React, { useEffect, useState } from "react";
// import Modal from "react-modal";

// import { ButtonCloseModal, ModalStyles, ModalWrapp } from "./ModalWaist.styled";
// import { useParams } from "react-router-dom";
// import { getAllExercises } from "api/ApiExercises";

// const ModalWaist = ({ filter, isOpen, closeModal, id }) => {
//   const { body_parts, muscles, equipmentId } = useParams();
//   const [allExercises, setExercises] = useState([]);

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
//   console.log("paramsbody_parts=", body_parts);
//   console.log("paramsequipmentId=", equipmentId);
//   console.log("paramsmuscles=", muscles);

//   useEffect(() => {
//     fetchAllExercises();
//     // eslint-disable-next-line
//   }, []);

//   console.log("Exercises=", allExercises);
//   console.log("id=", id);

//   return (
//     <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
//       {/* <ModalContent closeModal={closeModal} /> */}

//       <ModalWrapp>
//         <ButtonCloseModal onClick={closeModal}>X</ButtonCloseModal>
//         <h2> Название модального окна</h2>
//         <p>Текст модального окна</p>
//         {allExercises.map((exercise, index) => (
//           exercise._id===id && =>(
//           <div className="ExerciseItemt" key={index}>
//             <p>ID={exercise._id}</p>
//             <img width={100} src={exercise.gifUrl} alt={exercise.name} />
//             <p>Name:{exercise.name}</p>
//             <p>BurnedCalories:{exercise.burnedCalories}</p>
//             <p>Equipment:{exercise.equipment}</p>
//             <p>Target:{exercise.target}</p>
//             <p>BodyPart:{exercise.bodyPart}</p>
//             <p>Time:{exercise.time}</p>
//           </div>)
//         ))}
//       </ModalWrapp>
//     </Modal>
//   );
// };

// export default ModalWaist;
// ... (previous imports and component setup)

import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { ButtonCloseModal, ModalStyles, ModalWrapp } from "./ModalWaist.styled";
import { useParams } from "react-router-dom";
import { getAllExercises } from "api/ApiExercises";

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

  console.log("paramsbody_parts=", body_parts);
  console.log("paramsequipmentId=", equipmentId);
  console.log("paramsmuscles=", muscles);

  useEffect(() => {
    fetchAllExercises();
    // eslint-disable-next-line
  }, []);

  console.log("Exercises=", allExercises);
  console.log("id=", id);

  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <ModalWrapp>
        <ButtonCloseModal onClick={closeModal}>X</ButtonCloseModal>
        <h2> Название модального окна</h2>
        <p>Текст модального окна</p>

        {allExercises.map(
          (exercise, index) =>
            exercise._id === id && ( // Corrected the arrow function syntax here
              <div className="ExerciseItemt" key={index}>
                <p>ID={exercise._id}</p>
                <img width={100} src={exercise.gifUrl} alt={exercise.name} />
                <p>Name:{exercise.name}</p>
                <p>BurnedCalories:{exercise.burnedCalories}</p>
                <p>Equipment:{exercise.equipment}</p>
                <p>Target:{exercise.target}</p>
                <p>BodyPart:{exercise.bodyPart}</p>
                <p>Time:{exercise.time}</p>
              </div>
            )
        )}
      </ModalWrapp>
    </Modal>
  );
};

export default ModalWaist;
