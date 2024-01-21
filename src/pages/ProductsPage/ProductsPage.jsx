import Filters from 'components/Filters/Filters';
import ProductsList from 'components/ProductsList/ProductsList';
import { Container } from 'components/styles/Container/Container';
import React from 'react';

const ProductsPage = () => {
  return (
    <Container>
      <Filters />
      <ProductsList />
    </Container>
  );
};

export default ProductsPage;
