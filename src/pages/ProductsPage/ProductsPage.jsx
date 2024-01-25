import React, { useState, useEffect, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import Filters from 'components/Filters/Filters';
import ProductsList from 'components/ProductsList/ProductsList';
import { PageBgWrapperCont } from 'components/PageBgWrapperCont/PageBgWrapperCont.styled';
import { Container } from 'components/styles/Container/Container';
import { Button } from './ProductsPage.styled';
import { getProducts } from 'api/productsListApi';
import WithDataRedirect from 'HOC/HocRedirect';

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    query: '',
    category: '',
    allowed: '',
    page: null,
  });
  const [maxPages, setMaxPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFilters = newFilters => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts(
          filters.allowed,
          filters.category,
          filters.query
        );
        setMaxPages(Math.ceil(data.count / 100));
        setProducts(data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [filters]);

  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      page: 1,
    }));
  }, [filters.allowed, filters.category, filters.query]);

  const pageRef = useRef(1);

  const fetchMoreProducts = async () => {
    const nextPage = pageRef.current + 1;
    pageRef.current = nextPage;

    if (nextPage <= maxPages) {
      setCurrentPage(nextPage);

      const moreProducts = await getProducts(
        filters.allowed,
        filters.category,
        filters.query,
        nextPage
      );
      setProducts(prevProducts => [...prevProducts, ...moreProducts.result]);
    }
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <PageBgWrapperCont>
        <Filters filters={filters} onChangeFilters={handleChangeFilters} />
        <ProductsList products={products} />
        <Button onClick={fetchMoreProducts} disabled={currentPage >= maxPages}>
          {currentPage < maxPages ? 'Load More' : 'No More Products'}
        </Button>
      </PageBgWrapperCont>
    </Container>
  );
};

const WrappedProductsPage = WithDataRedirect(ProductsPage);
export default WrappedProductsPage;
