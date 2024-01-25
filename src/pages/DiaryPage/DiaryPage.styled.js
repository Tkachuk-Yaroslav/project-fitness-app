import styled from 'styled-components';

export const DiaryContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 64px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 32px;
  }
`;

export const DiaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const DiaryTitleContainer = styled.div`
position: relative;
  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 32px;
    justify-content: normal;
    gap: 460px;
    align-items: flex-end;
  }
  @media screen and (min-width: 1440px) {
    gap: 1000px;
    justify-content: normal;
  }
`;

export const DiaryTitle = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(28 / 24);
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(44 / 32);
    padding-top:10px;
  }
`;
