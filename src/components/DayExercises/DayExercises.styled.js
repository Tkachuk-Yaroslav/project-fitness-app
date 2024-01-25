import { Link } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';

export const ExercisesSection = styled.section`
  width: 335px;
  max-height: 1088px;
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
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 238px;
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
  padding: 96px;
`;

export const StyledScrollbar = createGlobalStyle`
.os-scrollbar {
    --os-track-border-radius: 0;
    --os-handle-bg: rgba(239, 237, 232, 0.10);
    --os-handle-bg-hover: #EF8964;
    --os-handle-bg-active: #E6533C;
}`;

export const ExercisesTitleList = styled.ul`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
  }
`;

export const ExercisesTitleItem = styled.li`
  margin-bottom: 8px;
  color: var(--light-orange-color);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  margin-right: ${props => {
    if (props.$index === 0) return '76px';
    if (props.$index === 1) return '84px';
    if (props.$index === 2) return '100px';
    if (props.$index === 3) return '62px';
    if (props.$index === 4) return '10px';
    
  }};
  @media screen and (min-width: 1440px) {
    margin-right: ${props => {
      if (props.$index === 0) return '100px';
      if (props.$index === 1) return '108px';
      if (props.$index === 2) return '106px';
      if (props.$index === 3) return '80px';
      if (props.$index === 4) return '16px';
    }};
  }
  @media screen and (max-width: 1439px) {
    width: ${props => {
    if (props.$index === 4) return '74px';
  }};
  }
  `;
