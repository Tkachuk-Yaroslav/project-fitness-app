import React, { useState } from 'react';
import Loader from 'components/Loader/Loader';
import Filters from 'components/Filters/Filters';
import ProductsList from 'components/ProductsList/ProductsList';
import { PageBgWrapperCont } from 'components/PageBgWrapperCont/PageBgWrapperCont.styled';
import { Container } from 'components/styles/Container/Container';
import { getProducts } from 'api/productsListApi';

const ProductsPage = () => {
  const [filters, setFilters] = React.useState({
    query: '',
    category: '',
    allowed: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFilters = newFilters => {
    setFilters(newFilters);
  };

  const [products, setProducts] = useState([]);
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts(
          filters.allowed,
          filters.category,
          filters.query
        );
        setProducts(data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [filters]);

  return (
    <Container>
      {isLoading && <Loader />}
      <PageBgWrapperCont>
        <Filters filters={filters} onChangeFilters={handleChangeFilters} />
        <ProductsList products={products} />
      </PageBgWrapperCont>
    </Container>
  );
};

export default ProductsPage;
