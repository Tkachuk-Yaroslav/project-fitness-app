import styled from 'styled-components';

export const MobButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 1439px) {
    display: block;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
