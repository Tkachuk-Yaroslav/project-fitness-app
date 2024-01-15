//to remove styles here
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

// const StyledLink = styled(NavLink)`
//   padding: 10px 27px;

//   border-radius: 12px;
//   text-decoration: none;
//   color: var(--white-color);
//   /* &:hover {
//     text-shadow: 0px 0px 10px currentColor;
//   } */
//   &.active {
//     /* color: rgb(103, 103, 238); */
//     background-color: var(--orange-color);
//   }
// `;

// const HeaderTag = styled.header`
//   /* display: flex;
//   align-items: center;

//   justify-content: space-between; */
// `;

// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 20px;
//   padding-bottom: 20px;
// `;

// const Nav = styled.nav`
//   /* display: none;
//   @media (min-width: 1440px) {
//     display: block;
//   } */
//   display: block;
// `;
// const List = styled.ul`
//   display: flex;
//   gap: 16px;
//   align-items: center;
//   justify-content: start;
// `;

// /////////////////////////////////////
// export const Svg = styled.svg`
//   width: 126px;
//   height: 13px;

//   @media screen and (min-width: 768px) {
//     width: 152px;
//     height: 17px;
//   }
// `;

/*--------------------------------------*/

const StyledLink = styled(NavLink)`
  padding: 10px 27px;

  border-radius: 12px;
  text-decoration: none;
  color: var(--white-color);

  &.active {
    /* color: rgb(103, 103, 238); */
    background-color: var(--orange-color);
  }
`;

const HeaderTag = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 18px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 96px;
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
  /* background-color: black; */
`;

export { HeaderTag, StyledLink };
