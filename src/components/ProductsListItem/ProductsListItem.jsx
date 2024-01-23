import React, { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import {
  ProductsCard,
  ProductsCardStatus,
  ProductsCardDiet,
  ProductsCardDietText,
  ProductsCardStatusCount,
  ProductsCardStatusCountTrue,
  ProductsCardStatusAdd,
  ProductsCardTitle,
  ProductsCardInfoList,
  ProductsCardInfoItem,
  ProductsCardInfoValue,
} from './ProductsListItem.styled';
import {
  IconTitleDiv,
  SpanIconRun,
  SvgIconRun,
} from 'components/ExercisesMain/Waist/ExercisesItem/ExercisesItem.styled';
import sprite from '../../images/sprite.svg';
import ModalProducts from 'components/ExercisesMain/ModalProducts';

const ProductsListItem = ({
  id,
  title,
  calories,
  category,
  weight,
  groupBloodNotAllowed,
}) => {
  const firstValue = Boolean(groupBloodNotAllowed['1']);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ProductsCard>
        <ProductsCardStatus>
          <ProductsCardDiet>
            <ProductsCardDietText>{category}</ProductsCardDietText>
          </ProductsCardDiet>
          <ProductsCardStatusCount>
            <StyleSheetManager>
              <ProductsCardStatusCountTrue $recommended={firstValue}>
                {firstValue ? 'Recommended' : 'Not recommended'}
              </ProductsCardStatusCountTrue>
            </StyleSheetManager>
            <ProductsCardStatusAdd
              onClick={openModalToggle}
              type="button"
            >
              Add
            </ProductsCardStatusAdd>
          </ProductsCardStatusCount>
        </ProductsCardStatus>
        <IconTitleDiv>
          <SpanIconRun>
            <SvgIconRun width={24} height={24}>
              <use href={`${sprite}#icon-run-exercises`}></use>
            </SvgIconRun>
          </SpanIconRun>
          <ProductsCardTitle>{title ? title : 'title'}</ProductsCardTitle>
        </IconTitleDiv>
        <ProductsCardInfoList>
          <ProductsCardInfoItem>
            <ProductsCardInfoValue>Calories: {calories}</ProductsCardInfoValue>
          </ProductsCardInfoItem>
          <ProductsCardInfoItem>
            <ProductsCardInfoValue>Category: {category}</ProductsCardInfoValue>
          </ProductsCardInfoItem>
          <ProductsCardInfoItem>
            <ProductsCardInfoValue>Weight: {weight}</ProductsCardInfoValue>
          </ProductsCardInfoItem>
        </ProductsCardInfoList>
      </ProductsCard>
      {isModalOpen && (
        <ModalProducts
          id={id}
          title={title}
          calories={calories}
          onClick={() => {
            // handle the click logic if needed
          }}
          onClose={openModalToggle}
        />
      )}
    </>
  );
};

export default ProductsListItem;