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
  SvgIconRun,
  SvgExercise,
} from "components/Exercises/Waist/ExercisesItem/ExercisesItem.styled";
import sprite from "../sprite.svg";

// import { Container } from "components/styles/Container/Container";
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
    // <Container>
    <ContainerWrapper className="ContainerWrapperItem">
      <NavDiv className="NavDiv">
        <CardLabel className="CardLabel ">{texts.cardLabel}</CardLabel>
        <ButtonStart
          className="ButtonStart"
          type="button"
          onClick={openModal}
          aria-label="Open BasicModalWindow"
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

      <ListInfo as="div">
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
          <SpanListInfo>{capitalizeFirstLetter(exercise.target)}</SpanListInfo>
        </p>
      </ListInfo>
    </ContainerWrapper>
    // </Container>
  );
};

export default ExerciseItem;
