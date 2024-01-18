import React from 'react';

import {
  ProductsContainer,
  ProductsList,
  ProductsItem,
  ProductsTitle,
  ProductsData,
  TrashBtn,
  IndicatorIcon,
} from './DayProductsItem.styled';
import sprite from '../../images/sprite.svg';

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
          <ProductsData>
            <IndicatorIcon />
            Yes
          </ProductsData>
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

export default DayProductsItem;
