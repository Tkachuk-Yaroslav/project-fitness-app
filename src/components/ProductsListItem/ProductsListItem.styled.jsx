import styled from 'styled-components';

export const ProductsCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 141px;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    max-width: 335px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
  }
`;
export const ProductsCardStatus = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 27px;
  justify-content: space-between;
`;
export const ProductsCardDiet = styled.span`
  display: inline-flex;
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  max-width: 100px;
`;
export const ProductsCardDietText = styled.p`
  color: var(--white-color);
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductsCardStatusCount = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductsCardStatusCountTrue = styled.p`
  color: var(--white-color);
  font-size: 12px;
  line-height: 18px;
  display: flex;
  margin-right: 16px;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background: ${props => (props.$recommended ? '#419b09' : '#E9101D')};
    margin-right: 8px;
  }
`;

export const ProductsCardStatusAdd = styled.button`
  background: transparent;
  border: none;
  color: var(--orange-color);
  font-size: 16px;
  line-height: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--white-color);
  }
`;

export const ProductsCardTitle = styled.h4`
  font-size: 24px;
  line-height: 1.3;
  color: var(--white-color);
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 240px;
`;

export const ProductsCardInfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const ProductsCardInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  max-width: 130px;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 18px;
`;

export const ProductsCardInfoValue = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--white);
  font-size: 12px;
  line-height: 18px;
`;
