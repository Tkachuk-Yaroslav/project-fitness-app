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

const DayProductsItem = product => {
  console.log(product, 'пропс в DayProductsItem');
  return (
    <ProductsContainer>
      <ProductsList>
        <ProductsItem $index={0}>
          <ProductsTitle>Title</ProductsTitle>
          <ProductsData>{product.product.product.title}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={1}>
          <ProductsTitle>Category</ProductsTitle>
          <ProductsData>{product.product.product.category}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={2}>
          <ProductsTitle>Calories</ProductsTitle>
          <ProductsData>{product.product.calories}</ProductsData>
        </ProductsItem>
        <ProductsItem index={3}>
          <ProductsTitle>Weight</ProductsTitle>
          <ProductsData>{product.product.amount}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={4}>
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
