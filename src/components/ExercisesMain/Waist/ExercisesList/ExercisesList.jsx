import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ExerciseItem from "components/ExercisesMain/Waist/ExercisesItem/ExercisesItem";
import ModalWaist from "../../ModalWaist/ModalWaist";
import Modal from "react-modal";
import waist1x from "../../../../images/waist-1x.jpg";
import waist2x from "../../../../images/waist-2x.jpg";
import {
  ButtonBack,
  CartaDiv,
  ContainerPage,
  ContainerWaist,
  ContainerWrapper,
  ImgWaist,
  NoExercisesTitle,
} from "../ExercisesList/ExercisesList.styled";
import { getAllExercises } from "../../../../api/ApiExercises";
import { SvgExercise } from "../ExercisesItem/ExercisesItem.styled";
import sprite from "../../../../images/sprite.svg";

Modal.setAppElement("#root");

const ExercisesList = ({ filter }) => {
  const { body_parts, muscles, equipmentId } = useParams();
  const [allExercises, setExercises] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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

  const location = useLocation();

  console.log("paramsbody_parts=", body_parts);
  console.log("paramsequipmentId=", equipmentId);
  console.log("paramsmuscles=", muscles);

  const capitalizedBodyParts = body_parts
    ? body_parts.slice(0, 1).toUpperCase() + body_parts.slice(1)
    : "";
  const capitalizedEquipmentId = equipmentId
    ? equipmentId.slice(0, 1).toUpperCase() + equipmentId.slice(1)
    : "";
  const capitalizedMuscles = muscles
    ? muscles.slice(0, 1).toUpperCase() + muscles.slice(1)
    : "";

  useEffect(() => {
    fetchAllExercises();
    // eslint-disable-next-line
  }, []);

  console.log("lengthExercises=", allExercises.length);

  return (
    <ContainerWaist className="ContainerWaist">
      <ContainerPage className="containerPage">
        <ContainerWrapper className="ContainerWrapperList">
          <CartaDiv className="CartaDiv">
            {allExercises.map((exercise, index) =>
              allExercises.length ? (
                <ExerciseItem
                  className="ExerciseItemt"
                  key={index}
                  exercise={exercise}
                  openModal={openModal}
                />
              ) : (
                <NoExercisesTitle>
                  There is not exercises downloaded else, plaese try choose this
                  categorie later!!!
                </NoExercisesTitle>
              )
            )}
            {capitalizedBodyParts ||
            capitalizedMuscles ||
            capitalizedEquipmentId ? (
              <Link className="css_GoBack" to={location.state.from}>
                <ButtonBack type="button">
                  <span>
                    <SvgExercise>
                      <use href={`${sprite}#icon-arrow-left-gray`}></use>
                    </SvgExercise>
                  </span>
                  Back
                </ButtonBack>
              </Link>
            ) : null}
            <ModalWaist
              filter={filter}
              isOpen={modalIsOpen}
              closeModal={closeModal}
            />
          </CartaDiv>
        </ContainerWrapper>
        <ImgWaist srcSet={`${waist1x} 1x, ${waist2x} 2x`} alt="image" />
      </ContainerPage>
    </ContainerWaist>
  );
};

export default ExercisesList;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useParams } from "react-router-dom";
// import ExerciseItem from "components/ExercisesMain/Waist/ExercisesItem/ExercisesItem";

// import ModalWaist from "../../ModalWaist/ModalWaist";
// import Modal from "react-modal"; // Import Modal from react-modal

// import waist1x from "../../../../images/waist-1x.jpg";
// import waist2x from "../../../../images/waist-2x.jpg";
// import {
//   ButtonBack,
//   CartaDiv,
//   ContainerPage,
//   ContainerWaist,
//   ContainerWrapper,
//   ImgWaist,
// } from "../ExercisesList/ExercisesList.styled";
// import { getAllExercises } from "../../../../api/ApiExercises";
// import { SvgExercise } from "../ExercisesItem/ExercisesItem.styled";

// import sprite from "../../../../images/sprite.svg";

// Modal.setAppElement("#root");

// const ExercisesList = ({ filter }) => {
//   const { body_parts, muscles, equipmentId } = useParams();
//   const [allExercises, setExercises] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

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

//   const location = useLocation();

//   console.log("paramsbody_parts=", body_parts);

//   console.log("paramsequipmentId=", equipmentId);

//   console.log("paramsmuscles=", muscles);
//   const capitalizedBodyParts = body_parts
//     ? body_parts.slice(0, 1).toUpperCase() + body_parts.slice(1)
//     : "";
//   const capitalizedEquipmentId = equipmentId
//     ? equipmentId.slice(0, 1).toUpperCase() + equipmentId.slice(1)
//     : "";
//   const capitalizedMuscles = muscles
//     ? muscles.slice(0, 1).toUpperCase() + muscles.slice(1)
//     : "";

//   useEffect(() => {
//     fetchAllExercises();
//     // eslint-disable-next-line
//   }, []);
//   console.log("lengthExercises=", allExercises.length);

//   return (

//     <ContainerWaist className="ContainerWaist">
//       <ContainerPage className="containerPage">
//         <ContainerWrapper className="ContainerWrapperList">
//           <CartaDiv className="CartaDiv">
//             {allExercises.slice(0, 50).map((exercise, index) => {
//                (allExercises.length === 0 )|| (!allExercises.length) ?(
//               return (
//                 <ExerciseItem
//                   className="ExerciseItemt"
//                   key={index}
//                   exercise={exercise}
//                   openModal={openModal}
//                 />
//               );) :(
//           <p>Выберете другую позицию</p>
//               )
//             })}

//             {capitalizedBodyParts ||
//             capitalizedMuscles ||
//             capitalizedEquipmentId ? (
//               <Link className="css_GoBack" to={location.state.from}>
//                 <ButtonBack type="button">
//                   <span>
//                     <SvgExercise>
//                       <use href={`${sprite}#icon-arrow-left-gray`}></use>
//                     </SvgExercise>
//                   </span>
//                   Back
//                 </ButtonBack>
//               </Link>
//             ) : null}

//             <ModalWaist isOpen={modalIsOpen} closeModal={closeModal} />
//           </CartaDiv>
//         </ContainerWrapper>
//         <ImgWaist srcSet={`${waist1x} 1x, ${waist2x} 2x`} alt="image" />
//       </ContainerPage>
//     </ContainerWaist>
//   );
// };

// export default ExercisesList;
