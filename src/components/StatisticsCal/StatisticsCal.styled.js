import { styled } from 'styled-components';

export const StatisticsCalCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 83px;
  gap: 4px;
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: var(--beige-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .running {
    width: 12px;
    height: 12px;
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
    width: 114px;
    gap: 8px;
    .circle {
      width: 24px;
      height: 24px;
      border-radius: 12px;
    }
    .running {
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
