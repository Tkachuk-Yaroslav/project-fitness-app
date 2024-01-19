import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseItem from "components/Exercises/Waist/ExercisesItem/ExercisesItem";

import ModalWaist from "../../ModalWaist/ModalWaist";
import Modal from "react-modal"; // Import Modal from react-modal
// import { Container } from "components/styles/Container/Container";
// import images from "../waist-1x.jpg";
import waist1x from "../../../../images/waist-1x.jpg";
import waist2x from "../../../../images/waist-2x.jpg";
import {
  ContainerPage,
  ContainerWaist,
  ContainerWrapper,
  ImgWaist,
} from "../ExercisesList/ExercisesList.styled";
import { getAllExercises } from "../../../../api/ApiExercises";
// Set the app element (root element of your application)

// const filter = `Body parts`;
// const filter = `Equipment`;
// const filter = `Body parts`;

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

  useEffect(() => {
    fetchAllExercises();
    // eslint-disable-next-line
  }, []);

  return (
    <ContainerWaist className="ContainerWaist">
      <ContainerPage className="containerPage">
        <ContainerWrapper className="ContainerWrapperList">
          {allExercises.slice(0, 50).map((exercise, index) => {
            return (
              <ExerciseItem
                className="ExerciseItemt"
                key={index}
                exercise={exercise}
                openModal={openModal}
              />
            );
            // }
            // return null;
          })}

          <ModalWaist isOpen={modalIsOpen} closeModal={closeModal} />
        </ContainerWrapper>
        {/* <ImgWaist src={images} alt="image" /> */}
        <ImgWaist srcSet={`${waist1x} 1x, ${waist2x} 2x`} alt="image" />
      </ContainerPage>
    </ContainerWaist>
  );
};

export default ExercisesList;
