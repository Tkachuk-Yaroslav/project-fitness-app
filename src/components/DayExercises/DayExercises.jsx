import React from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import './scrollbarStyled.css'
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
        <OverlayScrollbarsComponent defer>
        <DayExercisesItem />
        <DayExercisesItem />
        <DayExercisesItem />
        <DayExercisesItem />
        <DayExercisesItem />
        </OverlayScrollbarsComponent>
      </ExercisesSection>
    </>
  );
};

export default DayExercises;
