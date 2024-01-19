import styled from 'styled-components';
// export const TitleH1Styled = styled.h1`
//   font-weight: 700;
//   font-size: 24px;
//   padding-bottom: 20px;
// `;

export const ButtonBack = styled.button`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  color: rgba(239, 237, 232, 0.4);

  background: transparent;
  border: none;
  /* color: rgba(239, 237, 232, 0.4); */

  gap: 8px;
  padding: 0;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--white-color);
  }
  &:focus {
    color: var(--white-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 150% */
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const SvgExercise = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 150% */
  }
`;
