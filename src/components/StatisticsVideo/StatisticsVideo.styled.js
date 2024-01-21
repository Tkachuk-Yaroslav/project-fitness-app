import { styled } from 'styled-components';

export const StatisticsVideoCont = styled.div`
  display: flex;
  width: 110px;
  gap: 8px;
  align-items: center;
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: var(--light-orange-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .play {
    margin-left: 3px;
    margin-top: 1px;
    width: 11px;
    height: 11px;
  }
  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .value {
    font-family: RobotoBold;
    font-size: 16px;
    line-height: 1.125;
  }
  .descr {
    font-family: RobotoRegular;
    font-size: 12px;
    line-height: 1.33;
    opacity: 65%;
  }
  @media screen and (min-width: 768px) {
    width: 147px;
    gap: 12px;
    .circle {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .play {
      margin-left: 5px;
      margin-top: 1px;
      width: 17px;
      height: 17px;
    }
    .content-wrapper {
      gap: 8px;
    }
    .value {
      font-size: 24px;
      line-height: 1;
    }
    .descr {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
