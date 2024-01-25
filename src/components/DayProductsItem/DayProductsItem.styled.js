import styled from 'styled-components';
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`;

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3 1fr);
  gap: 16px;
  :nth-child(1),
  :nth-child(2) {
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
      if (props.$index === 0 || props.$index === 1) return '298px';
      if (props.$index === 2) return '80px';
      if (props.$index === 3) return '80px';
      if (props.$index === 4) return '76px';
    }};
  }
  @media screen and (min-width: 768px) {
    && > p {
      width: ${props => {
        if (props.$index === 0) return '204px';
        if (props.$index === 1) return '128px';
        if (props.$index === 2 || props.$index === 3) return '90px';
        if (props.$index === 4) return '80px';
      }};
    }
  }
  @media screen and (min-width: 1440px) {
    && > p {
      width: ${props => {
        if (props.$index === 0) return '212px';
        if (props.$index === 1) return '166px';
        if (props.$index === 2 || props.$index === 3) return '105px';
        if (props.$index === 4) return '110px';
      }};
    }
  }
  && > p {
    display: ${props => {
      if (props.$index === 4) return 'flex';
    }};
    gap: ${props => {
      if (props.$index === 4) return '8px';
    }};
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
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 1439px) {
    max-width: 78px;
  }
  @media screen and (max-width: 767px) {
    max-width: 80px;
  }
`;

export const ProductsData = styled.p`
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
  &::first-letter {
    text-transform: uppercase;
  }

`;

export const IndicatorIcon = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--success-color);
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  position: absolute;
  top: 198px;
  right: 6px;
  @media screen and (min-width: 768px) {
    top: 10px;
    right: 16px;
  }
  @media screen and (min-width: 1440px) {
    right: 20px;
  }
`;
