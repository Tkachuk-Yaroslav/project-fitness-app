import styled from 'styled-components';
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* color: white; */
  /* margin-bottom: 40px; */
`;

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  :nth-child(1),
  :nth-child(2) {
    grid-column: span 5;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    /* :nth-child(1) {
      width: 204px;
    }
    :nth-child(2) {
      width: 128px;
    }
    :nth-child(3),
    :nth-child(4) {
      width: 90px;
    }
    :nth-child(5) {
      width: 80px;
    } */
  }
`;

export const ProductsItem = styled.li`
  && > p {
    width: ${props => {
      if (props.index === 3) return '80px';
      if (props.index === 4) return '80px';
      if (props.index === 5) return '76px';
    }};
  }
  @media screen and (min-width: 768px) {
    && > p {
      width: ${props => {
        if (props.index === 0) return '204px'; // Ширина для першого елемента
        if (props.index === 1) return '128px'; // Ширина для другого елемента
        if (props.index === 2 || props.index === 3) return '90px'; // Ширина для третього елемента
        if (props.index === 4) return '80px';
        // Додайте інші ширини, якщо потрібно
        //   return '100px'; // Ширина за замовчуванням
      }};
      /* Інші стилі для <p>, якщо потрібно */
    }
  }
  @media screen and (min-width: 1440px) {
    && > p {
      width: ${props => {
        if (props.index === 0) return '212px';
        if (props.index === 1) return '166px';
        if (props.index === 2 || props.index === 3) return '105px';
        if (props.index === 4) return '110px';
      }};
      /* Інші стилі для <p>, якщо потрібно */
    }
  }
`;

export const ProductsTitle = styled.h4`
  margin-bottom: 8px;
  color: var(--light-orange-color);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductsData = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: var(--white-color);
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* @media screen and (min-width: 768px) {
    display: ${props => (props.displayed ? 'none' : 'block')};
  }  */
`;

export const IndicatorIcon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--success-color);
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  position: absolute;
  top: 198px;
  right: 0px;
  @media screen and (min-width: 768px) {
    top: 34px;
    right: 8px;
  }
  @media screen and (min-width: 1440px) {
    top: 34px;
    right: 20px;
  }
`;
