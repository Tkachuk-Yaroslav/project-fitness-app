import { styled } from 'styled-components';

export const StatisticsCont = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 234px;
  height: 252px;
  transform: translate(-20px, 560px);
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 310px;
    transform: translate(-32px, 714px);
  }
  @media screen and (min-width: 1440px) {
    width: 638px;
    height: 416px;
    transform: translate(-32px, 384px);
  }
`;