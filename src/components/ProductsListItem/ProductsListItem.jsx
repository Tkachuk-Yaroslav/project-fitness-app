import React from 'react';
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

const ProductsListItem = ({
  title,
  calories,
  category,
  weight,
  groupBloodNotAllowed,
}) => {
  const firstValue = Boolean(groupBloodNotAllowed['1']);

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
            // onClick={() => {
            //   openModalToggle(el);
            // }}
            type="button"
          >
            Add
          </ProductsCardStatusAdd>
        </ProductsCardStatusCount>
      </ProductsCardStatus>
      <ProductsCardTitle>{title ? title : 'title'}</ProductsCardTitle>

      <ProductsCardInfoList>
        <ProductsCardInfoItem>
          <ProductsCardInfoValue>Calories:{calories}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          <ProductsCardInfoValue>Category:{category}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
        <ProductsCardInfoItem>
          <ProductsCardInfoValue>Weight:{weight}</ProductsCardInfoValue>
        </ProductsCardInfoItem>
      </ProductsCardInfoList>
    </ProductsCard>
  );
};

export default ProductsListItem;
