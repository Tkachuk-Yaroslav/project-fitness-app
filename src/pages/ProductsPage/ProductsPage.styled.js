import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #e6533c;
  font-family: 'RobotoMedium';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  color: #efede8;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 6px;
  padding: 12px 40px 12px 40px;

  &:hover {
    background-color: var(--light-orange-color);
  }
  @media screen and (min-width: 768px){
    margin-left: 266px;
    margin-right: 0px;
  }
  @media screen and (min-width: 1440px){
    margin-left: 336px;

  }
`;

export { Button };
