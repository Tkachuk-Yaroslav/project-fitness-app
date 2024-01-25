import { styled } from 'styled-components';

export const StatisticsCont = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 280px;
  height: 380px;
  transform: translate(-140px, 590px);
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 380px;
    transform: translate(-352px, 714px);
  }
  @media screen and (min-width: 1440px) {
    left: 100%;
    width: 638px;
    height: 550px;
    transform: translate(-670px, 200px);
  }
`;