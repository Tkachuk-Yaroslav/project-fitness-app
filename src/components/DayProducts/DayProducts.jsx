import React, { useEffect, useState } from 'react';
import {
  ProductsSection,
  ProductsTitle,
  ProductsLink,
  ProductsContainer,
  SvgExercise,
} from './DayProducts.styled';
import DayProductsItem from 'components/DayProductsItem/DayProductsItem';
import sprite from '../../images/sprite.svg';
import { getDiaryData } from 'api/dairy';

const DayProducts = () => {
  const [diaryProdData, setDiaryProdData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiaryData();
        setDiaryProdData(data.consumedProducts);
      } catch (error) {}
    };

    fetchData();
  }, []);
  console.log(diaryProdData, 'diareProdData');
  return (
    <>
      <ProductsSection>
        <ProductsContainer>
          <ProductsTitle>Products</ProductsTitle>
          <ProductsLink>
            Add product
            <SvgExercise width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </SvgExercise>
          </ProductsLink>
        </ProductsContainer>
        {diaryProdData.length > 0
          ? diaryProdData.map(product => {
              console.log(product, 'Один продукт');
              return <DayProductsItem key={product._id} product={product} />;
            })
          : null}

        {/* <DayProductsItem />
        <DayProductsItem />
        <DayProductsItem /> */}
      </ProductsSection>
    </>
  );
};

export default DayProducts;
