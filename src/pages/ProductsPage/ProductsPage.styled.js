import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: #e6533c;
  font-family: 'RobotoMedium';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  color: #efede8;
  margin-top: 10px;

  &:hover {
    background-color: var(--light-orange-color);
  }
`;

export { Button };
