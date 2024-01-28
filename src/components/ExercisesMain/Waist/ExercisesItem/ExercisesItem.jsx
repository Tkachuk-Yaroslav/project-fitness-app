import React from "react";
import {
  ButtonStart,
  ContainerWrapper,
  CardLabel,
  H3,
  IconTitleDiv,
  ListInfo,
  NavDiv,
  SpanIconRun,
  SpanListInfo,
  SpanListInfoTarget,
  SvgIconRun,
  SvgExercise,
} from "components/ExercisesMain/Waist/ExercisesItem/ExercisesItem.styled";
import sprite from "../../../../images/sprite.svg";
import Modal from "react-modal";
const texts = {
  cardLabel: "WORKOUT",
  btnLabel: "Start",
  list: {
    burnedCalories: "Burned calories:",
    bodyPart: "Body part:",
    target: "Target:",
  },
};
const capitalizeFirstLetter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};
const ExerciseItem = ({ exercise, openModal }) => {
  return (
    <ContainerWrapper className="ContainerWrapperItem">
      <NavDiv className="NavDiv">
        <CardLabel className="CardLabel ">{texts.cardLabel}</CardLabel>
        <ButtonStart
          className="ButtonStart"
          type="button"
          // onClick={openModal}
          onClick={() => openModal(exercise._id)}
          aria-label="Open ModalWaist"
        >
          {texts.btnLabel}
          <span>
            <SvgExercise>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </SvgExercise>
          </span>
        </ButtonStart>
      </NavDiv>
      <IconTitleDiv>
        <SpanIconRun>
          <SvgIconRun width={24} height={24}>
            <use href={`${sprite}#icon-run-exercises`}></use>
          </SvgIconRun>
        </SpanIconRun>
        <H3>{capitalizeFirstLetter(exercise.name)}</H3>
      </IconTitleDiv>

      <ListInfo className="div">
        <p>
          {texts.list.burnedCalories}
          <SpanListInfo className="SpanListInfo">
            {exercise.burnedCalories}
          </SpanListInfo>
        </p>
        <p>
          {texts.list.bodyPart}
          <SpanListInfo>
            {capitalizeFirstLetter(exercise.bodyPart)}
          </SpanListInfo>
        </p>
        <p>
          {texts.list.target}
          <SpanListInfoTarget>
            {capitalizeFirstLetter(exercise.target)}
          </SpanListInfoTarget>
        </p>
      </ListInfo>
    </ContainerWrapper>
  );
};

export default ExerciseItem;
