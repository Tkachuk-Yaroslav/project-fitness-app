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
