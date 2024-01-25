import { styled } from 'styled-components';

export const StatisticsHeightCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--beige-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-svg {
    width: 12px;
    height: 12px;
    fill: var(--white-color);
  }
  .content-wrapper {
    display: flex;
    align-items: end;
    gap: 8px;
  }
  .value {
    font-family: RobotoBold;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.01em;
  }
  .descr {
    font-family: RobotoBold;
    font-size: 12px;
    line-height: 1.33;
    opacity: 65%;
  }
  @media screen and (min-width: 768px) {
    gap: 8px;
    .circle {
      width: 24px;
      height: 24px;
      border-radius: 12px;
    }
    .icon-svg {
      width: 16px;
      height: 16px;
    }
    .content-wrapper {
      gap: 11px;
    }
    .value {
      font-size: 48px;
      line-height: 1.04;
    }
    .descr {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
