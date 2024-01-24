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
  SvgExercise,
  Value,
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
            <SvgExercise>
              <use href={`${sprite}#icon-arrow-right`}></use>
            </SvgExercise>
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
          <ProductsCardInfoValue>
            Calories:<Value>{calories}</Value>
          </ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          <ProductsCardInfoValue>
            Category:<Value> {category}</Value>
          </ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          <ProductsCardInfoValue>
            Weight:<Value>{weight}</Value>
          </ProductsCardInfoValue>
        </ProductsCardInfoItem>
      </ProductsCardInfoList>
    </ProductsCard>
    <ModalProducts
        id={id}
        title={title}
        calories={calories}
        isOpen={isModalOpen}
        onClose={openModalToggle}
      />
  );
};

export default ProductsListItem;
