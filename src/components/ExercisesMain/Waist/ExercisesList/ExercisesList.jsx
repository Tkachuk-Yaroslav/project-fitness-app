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
import Loader from "components/Loader/Loader";

Modal.setAppElement("#root");

const ExercisesList = ({ filter }) => {
  const { body_parts, muscles, equipmentId } = useParams();
  const [allExercises, setExercises] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const openModal = (id) => {
    setModalIsOpen(true);
    setModalId(id);
  };

  const fetchAllExercises = async () => {
    try {
      setIsLoading(true);
      const exercises = await getAllExercises(
        filter,
        body_parts || muscles || equipmentId
      );
      setExercises(exercises);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    fetchAllExercises();
    // eslint-disable-next-line
  }, []);

  const capitalizedBodyParts = body_parts
    ? body_parts.slice(0, 1).toUpperCase() + body_parts.slice(1)
    : "";
  const capitalizedEquipmentId = equipmentId
    ? equipmentId.slice(0, 1).toUpperCase() + equipmentId.slice(1)
    : "";
  const capitalizedMuscles = muscles
    ? muscles.slice(0, 1).toUpperCase() + muscles.slice(1)
    : "";

  return (
    <ContainerWaist className="ContainerWaist">
      {isLoading && <Loader />}
      <ContainerPage className="containerPage">
        <ContainerWrapper className="ContainerWrapperList">
          <CartaDiv className="CartaDiv">
            {allExercises.map((exercise, index) => (
              <ExerciseItem
                className="ExerciseItemt"
                key={index}
                exercise={exercise}
                openModal={openModal}
              />
            ))}
            {!allExercises.length && (
              <NoExercisesTitle>
                There are no exercises downloaded yet. Please try choosing this
                category later!
              </NoExercisesTitle>
            )}
            {(capitalizedBodyParts ||
              capitalizedMuscles ||
              capitalizedEquipmentId) && (
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
            )}
            <ModalWaist
              filter={filter}
              isOpen={modalIsOpen}
              closeModal={closeModal}
              id={modalId}
            />
          </CartaDiv>
        </ContainerWrapper>
        <ImgWaist srcSet={`${waist1x} 1x, ${waist2x} 2x`} alt="image" />
      </ContainerPage>
    </ContainerWaist>
  );
};

export default ExercisesList;
