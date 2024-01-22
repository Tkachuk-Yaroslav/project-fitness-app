import styled from 'styled-components';
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 1440px) {
    margin-left: 16px
  }
`;

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    grid-column: span 5;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

export const ProductsItem = styled.li`
  && > p {
    width: ${props => {
            if (props.$index === 0 || props.$index === 1 || props.$index === 2) return '298px';

      if (props.$index === 3) return '80px';
      if (props.$index === 4) return '80px';
      if (props.$index === 5) return '76px';
    }};
  }
  @media screen and (min-width: 768px) {
    && > p {
      width: ${props => {
        if (props.$index === 0) return '90px';
        if (props.$index === 1) return '132px';
        if (props.$index === 2) return '128px';
        if (props.$index === 3) return '84px';
        if (props.$index === 4) return '78px';
        if (props.$index === 5) return '72px';
      }};
    }
  }
  @media screen and (min-width: 1440px) {
    && > p {
      width: ${props => {
        if (props.$index === 0) return '115px';
        if (props.$index === 1) return '157px';
        if (props.$index === 2) return '131px';
        if (props.$index === 3) return '106px';
        if (props.$index === 4) return '91px';
        if (props.$index === 5) return '82px';
      }};
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
  @media screen and (max-width: 1439px) {
    max-width: 78px;
  }
  @media screen and (max-width: 767px) {
    max-width: 80px;
  }
`;

export const ProductsData = styled.p`
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
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  position: absolute;
  top: 280px;
  right: 6px;
  @media screen and (min-width: 768px) {
    top: 34px;
    right: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 34px;
    right: 20px;
  }
`;
