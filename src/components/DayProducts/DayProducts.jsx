import React from 'react';
import {
  ProductsSection,
  ProductsTitle,
  ProductsLink,
  ProductsContainer,
} from './DayProducts.styled';
import DayProductsItem from 'components/DayProductsItem/DayProductsItem';

const DayProducts = () => {
  return (
    <>
      <ProductsSection>
        <ProductsContainer>
          <ProductsTitle>Products</ProductsTitle>
          <ProductsLink> Add product</ProductsLink>
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
