import React from 'react';
import Filters from 'components/Filters/Filters';
import ProductsList from 'components/ProductsList/ProductsList';
import { Container } from 'components/styles/Container/Container';
import { getProducts } from 'api/productsListApi';

const ProductsPage = () => {
  const [filters, setFilters] = React.useState({
    query: '',
    category: '',
    allowed: '',
  });

  const handleChangeFilters = newFilters => {
    setFilters(newFilters);
  };

  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(
          filters.allowed,
          filters.category,
          filters.query
        );
        setProducts(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [filters]);

  return (
    <Container>
      <Filters filters={filters} onChangeFilters={handleChangeFilters} />
      <ProductsList products={products} />
    </Container>
  );
};

export default ProductsPage;
