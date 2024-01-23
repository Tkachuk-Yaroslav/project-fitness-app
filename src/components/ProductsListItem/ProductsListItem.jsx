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
import ModalProducts from 'components/ExercisesMain/ModalProducts';

const ProductsListItem = ({
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

      {isModalOpen && (
        <ModalProducts
         
          title={title}
          calories={calories}
          onClose={openModalToggle}
        />
      )}
    </>
  );
};

export default ProductsListItem;
