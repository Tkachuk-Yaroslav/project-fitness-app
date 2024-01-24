import styled from 'styled-components';

export const ContainerWaist = styled.div`
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ContainerPage = styled.div`
  @media screen and (min-width: 768px) {
    max-height: 726px;
    position: absolute;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ContainerWrapper = styled.div`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 702px;
    height: 760px;

    overflow-y: auto;
    overflow-x: hidden; /* Hide horizontal scrollbar */

    /* Scrollbar styling for webkit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 8px;
      margin: 10px; /* Add margin to the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--light-orange-color);
      border-radius: 12px;
      height: 153px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    /* Scrollbar styling for Firefox */
    scrollbar-width: thin;
    scrollbar-color: var(--light-orange-color) transparent;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 405px 405px;
    width: 848px;

    height: 500px;
    overflow-y: auto;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    margin: 0;
    /* Scrollbar styling for webkit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 8px;
      margin: 10px; /* Add margin to the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--light-orange-color);
      border-radius: 12px;
      height: 153px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    /* Scrollbar styling for Firefox */
    scrollbar-width: thin;
    scrollbar-color: var(--light-orange-color) transparent;
  }
`;

export const CartaDiv = styled.div`
  display: grid;
  margin: 0 auto;
  width: 335px;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 335px 335px;
    justify-content: space-around;
    gap: 32px 16px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 405px 405px;
  }
`;
export const ImgWaist = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    position: absolute;
    top: -147px;
    left: 866px;
    display: block;

    display: block;
    z-index: -5;
  }
`;

export const ButtonBack = styled.button`
  position: absolute;
  top: 71px;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  color: rgba(239, 237, 232, 0.4);

  background: transparent;
  border: none;

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
    top: -116px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 150% */
    left: 0;
  }
  @media screen and (min-width: 1440px) {
    top: -114px;
    left: 0px;
  }
`;

export const NoExercisesTitle = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
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
