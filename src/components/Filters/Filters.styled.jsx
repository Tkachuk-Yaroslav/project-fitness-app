import styled from 'styled-components';

const FiltersWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
  margin-bottom: 28px;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: start;
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 68px;
    justify-content: end;
  }
`;

export { FiltersWrap };
