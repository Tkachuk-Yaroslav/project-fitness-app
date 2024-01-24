import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { createGlobalStyle, styled } from 'styled-components';

export const ExercisesSection = styled.section`
  width: 335px;
  max-height: 1064px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 16px 4px 16px 16px;
  /* margin-bottom: 40px; */
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  overflow: auto;
  /* &::-webkit-scrollbar {
    width: 0;
  } */
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

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExercisesTitle = styled.h3`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
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

export const ExercisesLink = styled(Link)`
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

export const StyledScrollbar = createGlobalStyle`
.os-scrollbar {
    --os-track-border-radius: 0;
    --os-handle-bg: rgba(239, 237, 232, 0.10);
    --os-handle-bg-hover: #EF8964;
    --os-handle-bg-active: #E6533C;
}`;
