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

const DayExercisesItem = () => {
  return (
    <ProductsContainer>
      <ProductsList>
        <ProductsItem $index={0}>
          <ProductsTitle>Part</ProductsTitle>
          <ProductsData>Bread Hercules grain</ProductsData>
        </ProductsItem>
        <ProductsItem $index={1}>
          <ProductsTitle>Equipment</ProductsTitle>
          <ProductsData>Flour</ProductsData>
        </ProductsItem>
        <ProductsItem $index={2}>
          <ProductsTitle>Name</ProductsTitle>
          <ProductsData>Flour</ProductsData>
        </ProductsItem>
        <ProductsItem $index={3}>
          <ProductsTitle>Target</ProductsTitle>
          <ProductsData>289</ProductsData>
        </ProductsItem>
        <ProductsItem $index={4}>
          <ProductsTitle>Burned Calories</ProductsTitle>
          <ProductsData>100</ProductsData>
        </ProductsItem>
        <ProductsItem $index={5}>
          <ProductsTitle>Time</ProductsTitle>
          <ProductsData>Yes</ProductsData>
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
