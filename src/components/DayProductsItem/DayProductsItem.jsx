import 'overlayscrollbars/overlayscrollbars.css';
import React, { useContext } from 'react';

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
import axios from 'axios';
import { getDiaryData } from 'api/dairy';
import { ParentContext } from '../DayProducts/DayProducts';
import { DiaryContext } from '../../pages/DiaryPage/DiaryPage';

const DayProductsItem = (product, calendarData) => {
  console.log(product.calendarData, 'calendarData in DayProductsItem');
  const { setDataDash } = useContext(DiaryContext);

  const { setDiaryProdData } = useContext(ParentContext);
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://project-fitness-app-back.onrender.com/api/dairy/delProduct/${product.product._id}`
      );
      const data = await getDiaryData(product.calendarData);
      setDiaryProdData(data.consumedProducts);
      setDataDash({
        consumedBurned: data.consumedBurned,
        consumedCalories: data.consumedCalories,
      });
    } catch (error) {
      console.error('Error deleting produts:', error);
    }
  };
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
          <ProductsData>{Math.round(product.product.calories)}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={3}>
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
      <TrashBtn onClick={handleDelete}>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-trash`} />
        </svg>
      </TrashBtn>
    </ProductsContainer>
  );
};

export default DayProductsItem;
