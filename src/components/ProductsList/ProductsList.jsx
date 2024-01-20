import { getAllExercises } from 'api/productsListApi';
import ProductsListItem from 'components/ProductsListItem/ProductsListItem';
import React, { useEffect, useState } from 'react';
import { ProductsListWrap } from './ProductsList.styled';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await getAllExercises();
        setProducts(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);
  return (
    <ProductsListWrap>
      {products.map(
        ({ _id, groupBloodNotAllowed, weight, calories, category, title }) => (
          <ProductsListItem
            key={_id}
            weight={weight}
            calories={calories}
            category={category}
            title={title}
            groupBloodNotAllowed={groupBloodNotAllowed}
          />
        )
      )}
    </ProductsListWrap>
  );
};

export default ProductsList;
