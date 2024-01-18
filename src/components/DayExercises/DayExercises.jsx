import React from 'react';
import {
  ExercisesSection,
  ExercisesTitle,
  ExercisesLink,
  ProductsContainer,
} from './DayExercises.styled';
import DayExercisesItem from 'components/DayExercisesItem/DayExercisesItem';
import sprite from '../../images/sprite.svg';

const DayExercises = () => {
  return (
    <>
      <ExercisesSection>
        <ProductsContainer>
          <ExercisesTitle>Exercises</ExercisesTitle>
          <ExercisesLink>
            Add exercise
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </svg>
          </ExercisesLink>
        </ProductsContainer>
        <DayExercisesItem />
      </ExercisesSection>
    </>
  );
};

export default DayExercises;
