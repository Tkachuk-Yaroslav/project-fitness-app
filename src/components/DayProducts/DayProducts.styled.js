import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductsSection = styled.section`
  width: 335px;
  max-height: 842px;
  display: flex;
  flex-direction: column;
  padding: 16px 4px 16px 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  overflow: auto;
  @media screen and (max-width: 767px) {
    min-height: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 238px;
    /* gap: 19px; */
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 238px;
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
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    margin-bottom: 19px;
  }
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
  margin-right: 12px;
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

export const NoDataTitle = styled.p`
  color: rgba(239, 237, 232, 0.3);
  /* font-family: Roboto; */
  font-size: 14px;
  font-style: normal;
  line-height: calc(18 / 14);
`;

export const NoDataWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 94px;
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const ProductsTitleList = styled.ul`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`;

export const ProductsTitleItem = styled.li`
  margin-bottom: 8px;
  color: var(--light-orange-color);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: ${props => {
    if (props.$index === 0) return '190px';
    if (props.$index === 1) return '86px';
    if (props.$index === 2) return '56px';
    if (props.$index === 3) return '62px';
  }};
  @media screen and (min-width: 1440px) {
    margin-right: ${props => {
      if (props.$index === 0) return '198px';
      if (props.$index === 1) return '124px';
      if (props.$index === 2) return '70px';
      if (props.$index === 3) return '74px';
    }};
  }
`;
