import React, { useContext, useEffect, useState } from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import '../../components/styles/ScrollbarStyled/scrollbarStyled.css';
import {
  ProductsSection,
  ProductsTitle,
  ProductsLink,
  ProductsContainer,
  SvgExercise,
  NoDataTitle,
  NoDataWrap,
  ProductsTitleList,
  ProductsTitleItem,
} from './DayProducts.styled';
import DayProductsItem from 'components/DayProductsItem/DayProductsItem';
import sprite from '../../images/sprite.svg';
import { getDiaryData } from 'api/dairy';
import { DiaryContext } from '../../pages/DiaryPage/DiaryPage';

export const ParentContext = React.createContext();
const DayProducts = ({ calendarData }) => {
  const [diaryProdData, setDiaryProdData] = useState([]);
  const { setDataDash } = useContext(DiaryContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiaryData(calendarData);
        setDiaryProdData(data.consumedProducts);
        setDataDash({
          consumedBurned: data.consumedBurned,
          consumedCalories: data.consumedCalories,
        });
      } catch (error) {}
    };

    fetchData();
  }, [calendarData, setDataDash]);
  return (
    <>
      <ProductsSection>
        <ProductsContainer>
          <ProductsTitle>Products</ProductsTitle>
          <ProductsLink to={'/products'}>
            Add product
            <SvgExercise width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </SvgExercise>
          </ProductsLink>
        </ProductsContainer>
        {diaryProdData.length > 0 ? (
          <ProductsTitleList>
            <ProductsTitleItem $index={0}>Title</ProductsTitleItem>
            <ProductsTitleItem $index={1}>Category</ProductsTitleItem>
            <ProductsTitleItem $index={2}>Calories</ProductsTitleItem>
            <ProductsTitleItem $index={3}>Weight</ProductsTitleItem>
            <ProductsTitleItem>Recommend</ProductsTitleItem>
          </ProductsTitleList>
        ) : null}
        <OverlayScrollbarsComponent defer>
          {diaryProdData.length > 0 ? (
            diaryProdData.map(product => {
              return (
                <ParentContext.Provider
                  key={product._id}
                  value={{ diaryProdData, setDiaryProdData }}
                >
                  <DayProductsItem
                    product={product}
                    calendarData={calendarData}
                  />
                </ParentContext.Provider>
              );
            })
          ) : (
            <NoDataWrap>
              <NoDataTitle>Not found products</NoDataTitle>
            </NoDataWrap>
          )}
        </OverlayScrollbarsComponent>
      </ProductsSection>
    </>
  );
};

export default DayProducts;
