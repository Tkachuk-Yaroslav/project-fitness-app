import { styled } from 'styled-components';

export const StatisticsBlocksCont = styled.div`
  background-color: var(--gray-color);
  display: inline-block;
  padding: 14px 18px;
  border-radius: 12px;
  &.calories {
    background-color: var(--light-orange-color);
    margin-top: 70px;
    margin-left: 115px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 36px 20px 23px;
    &.calories {
      padding: 14px 38px 14px 28px;
      margin-top: 56px;
      margin-left: 225px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.calories {
      margin-top: 39px;
      margin-left: 458px;
    }
  }
`;


