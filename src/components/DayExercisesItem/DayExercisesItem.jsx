import React from 'react';

import {
  ProductsContainer,
  ProductsList,
  ProductsItem,
  ProductsTitle,
  ProductsData,
} from './DayExercisesItem.styled';

const DayExercisesItem = () => {
  return (
    <ProductsContainer>
      <ProductsList>
        <ProductsItem index={0}>
          <ProductsTitle>Part</ProductsTitle>
          <ProductsData>Bread Hercules grain</ProductsData>
        </ProductsItem>
        <ProductsItem index={1}>
          <ProductsTitle>Equipment</ProductsTitle>
          <ProductsData>Flour</ProductsData>
        </ProductsItem>
        <ProductsItem index={2}>
          <ProductsTitle>Name</ProductsTitle>
          <ProductsData>Flour</ProductsData>
        </ProductsItem>
        <ProductsItem index={3}>
          <ProductsTitle>Target</ProductsTitle>
          <ProductsData>289</ProductsData>
        </ProductsItem>
        <ProductsItem index={4}>
          <ProductsTitle>Burned Calories</ProductsTitle>
          <ProductsData>100</ProductsData>
        </ProductsItem>
        <ProductsItem index={5}>
          <ProductsTitle>Time</ProductsTitle>
          <ProductsData>Yes</ProductsData>
        </ProductsItem>
      </ProductsList>
    </ProductsContainer>
  );
};

export default DayExercisesItem;
