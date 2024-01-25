import { styled } from 'styled-components';

export const StatisticsBlocksCont = styled.div`
  position: absolute;
  background-color: var(--gray-color);
  display: inline-block;
  padding: 14px 18px;
  border-radius: 12px;
  &.calories {
    background-color: var(--light-orange-color);
    margin-top: 70px;
    right: 0;
  }
  &.users {
    margin-top: 150px;
  }
  &.hours {
    background-color: var(--light-orange-color);
    margin-top: 220px;
    right: 0;
  }
  &.exercises {
    margin-top: 300px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 36px 20px 23px;
    &.video {
      margin-left: 230px;
    }
    &.calories {
      padding: 14px 38px 14px 28px;
      margin-top: 50px;
      right: 30px;
    }
    &.users {
      margin-top: 270px;
    }
    &.hours {
      padding: 14px 38px 14px 28px;
      margin-top: 130px;
      right: 400px;
    }
    &.exercises {
      margin-top: 220px;
      right: 60px;
    }
  }
  @media screen and (min-width: 1440px) {
    &.video {
      margin-left: 0;
    }
    &.calories {
      margin-top: 80px;
      right: 40px;
    }
    &.users {
      margin-top: 430px;
    }
    &.hours {
      margin-top: 190px;
      right: unset;
      left: 0;
    }
    &.exercises {
      margin-top: 320px;
      right: 40px;
    }
  }
`;


