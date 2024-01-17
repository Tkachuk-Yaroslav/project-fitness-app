import React from 'react';
import {
  ExercisesSection,
  ExercisesTitle,
  ExercisesLink,
  ProductsContainer,
} from './DayExercises.styled';
import DayExercisesItem from 'components/DayExercisesItem/DayExercisesItem';

const DayExercises = () => {
  return (
    <>
      <ExercisesSection>
        <ProductsContainer>
          <ExercisesTitle>Exercises</ExercisesTitle>
          <ExercisesLink>Add exercise</ExercisesLink>
        </ProductsContainer>
        <DayExercisesItem />
      </ExercisesSection>
    </>
  );
};

export default DayExercises;
