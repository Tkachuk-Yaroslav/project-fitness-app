import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  padding: 10px 27px;

  border-radius: 12px;
  text-decoration: none;
  color: var(--white-color);
  /* &:hover {
    text-shadow: 0px 0px 10px currentColor;
  } */
  &.active {
    /* color: rgb(103, 103, 238); */
    background-color: var(--orange-color);
  }
`;

const Header = styled.header`
  /* display: flex;
  align-items: center;

  justify-content: space-between; */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: start;
`;

export { Nav, NavLink, List, Header, StyledLink, HeaderContainer };
