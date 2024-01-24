import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductsSection = styled.section`
  width: 335px;
  max-height: 824px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 16px;
  /* margin-bottom: 40px; */
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 234px;
    gap: 19px;
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`;

export const SvgExercise = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--orange-color);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsTitle = styled.h3`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
`;

export const ProductsLink = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--orange-color);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
  &:hover,
  &:focus {
    color: var(--white-color);
    ${SvgExercise} {
      stroke: var(--white-color);
    }
  }
`;
