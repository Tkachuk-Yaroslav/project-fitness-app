import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  padding: 10px 27px;

  border-radius: 12px;
  text-decoration: none;
  color: var(--white-color);

  &.active {
    background-color: var(--orange-color);
  }
`;

const HeaderTag = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  margin: 0 auto;
  height: 61px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 19px 32px;
    width: 768px;
    height: 84px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 96px;
    width: 1440px;
  }
`;

export const LogoLink = styled(Link)`
  margin-right: auto;
`;

export const Svg = styled.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export { HeaderTag, StyledLink };
