import styled from 'styled-components';

export const ProductsListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow-y: auto;
  max-height: 80vh;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 870px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 4px;
    height: 153px;
  }

  &::-webkit-scrollbar-track {
    background-color: #efede81a;
  }
`;
