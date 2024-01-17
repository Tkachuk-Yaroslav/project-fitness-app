import React from 'react';

import {
  ProductsContainer,
  ProductsList,
  ProductsItem,
  ProductsTitle,
  ProductsData,
} from './DayProductsItem.styled';

const DayProductsItem = () => {
  return (
    <ProductsContainer>
      <ProductsList>
        <ProductsItem index={0}>
          <ProductsTitle>Title</ProductsTitle>
          <ProductsData>Bread Hercules grain</ProductsData>
        </ProductsItem>
        <ProductsItem index={1}>
          <ProductsTitle>Category</ProductsTitle>
          <ProductsData>Flour</ProductsData>
        </ProductsItem>
        <ProductsItem index={2}>
          <ProductsTitle>Calories</ProductsTitle>
          <ProductsData>289</ProductsData>
        </ProductsItem>
        <ProductsItem index={3}>
          <ProductsTitle>Weight</ProductsTitle>
          <ProductsData>100</ProductsData>
        </ProductsItem>
        <ProductsItem index={4}>
          <ProductsTitle>Recommend</ProductsTitle>
          <ProductsData>Yes</ProductsData>
        </ProductsItem>
      </ProductsList>
    </ProductsContainer>
  );
};

export default DayProductsItem;
