import React from 'react';
import {
  ProductsSection,
  ProductsTitle,
  ProductsLink,
  ProductsContainer,
} from './DayProducts.styled';
import DayProductsItem from 'components/DayProductsItem/DayProductsItem';
import sprite from '../../images/sprite.svg';

const DayProducts = () => {
  return (
    <>
      <ProductsSection>
        <ProductsContainer>
          <ProductsTitle>Products</ProductsTitle>
          <ProductsLink>
            Add product
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </svg>
          </ProductsLink>
        </ProductsContainer>
        <DayProductsItem />
        {/* <DayProductsItem />
        <DayProductsItem />
        <DayProductsItem /> */}
      </ProductsSection>
    </>
  );
};

export default DayProducts;
