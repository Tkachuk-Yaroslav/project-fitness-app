import React from 'react';


import {
  ProductsContainer,
  ProductsList,
  ProductsItem,
  ProductsTitle,
  ProductsData,
  TrashBtn,
} from './DayExercisesItem.styled';
import sprite from '../../images/sprite.svg';

const DayExercisesItem = (exercise) => {
  console.log(exercise,'exercse')
  return (
    <ProductsContainer>
      <ProductsList>
        <ProductsItem $index={0}>
          <ProductsTitle>Part</ProductsTitle>
          <ProductsData>{exercise.exercise.bodyPart}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={1}>
          <ProductsTitle>Equipment</ProductsTitle>
          <ProductsData>{exercise.exercise.equipment}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={2}>
          <ProductsTitle>Name</ProductsTitle>
          <ProductsData>{exercise.exercise.name}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={3}>
          <ProductsTitle>Target</ProductsTitle>
          <ProductsData>{exercise.exercise.target}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={4}>
          <ProductsTitle>Burned Calories</ProductsTitle>
          <ProductsData>{exercise.exercise.burnedCalories}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={5}>
          <ProductsTitle>Time</ProductsTitle>
          <ProductsData>{exercise.time}</ProductsData>
        </ProductsItem>
      </ProductsList>
      <TrashBtn>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-trash`} />
        </svg>
      </TrashBtn>
    </ProductsContainer>
  );
};

export default DayExercisesItem;
