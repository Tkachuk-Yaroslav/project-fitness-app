import styled from 'styled-components';

export const DashboardSection = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  width: 335px;
  /* padding-bottom: 40px; */
  @media screen and (min-width: 768px) {
    gap: 32px;
    width: 593px;
  }
  @media screen and (min-width: 1440px) {
    gap: 48px;
    width: 390px;
  }
`;

export const DashboardList = styled.ul`
  display: flex;
  column-gap: 13px;
  row-gap: 20px;
  flex-wrap: wrap;
  li:nth-child(1),
  li:nth-child(2) {
    background-color: var(--orange-color);
  }
  @media screen and (max-width: 767px) {
    li:nth-child(1),
    li:nth-child(3),
    li:nth-child(5) {
      width: 157px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 593px;
    height: 248px;
    flex-direction: column;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
    height: 380px;
    flex-direction: row;
  }
`;

export const DashboardItems = styled.li`
  /* position: relative; */
  width: 165px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  padding: 14px;
  font-size: 12px;
  line-height: calc(16 / 12);
  /* flex-basis: calc((100% - 1 * 45px) / 2); */
  @media screen and (min-width: 768px) {
    flex-basis: auto;
    width: 187px;
    height: 116px;
    padding: 18px;
  }
`;

export const DashboardTitle = styled.h3`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  @media screen and (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`;

export const DashboardData = styled.p`
  color: var(--white-color);
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const DashboardText = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;
