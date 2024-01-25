import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;

  background-color: var(--black-color);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;

  padding: 10px 27px;
  color: var(--white-color);

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: var(--orange-color);
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin-left: 30px;
`;

export const ProfileSvg = styled.svg`
  width: 24px;
  height: 24px;

  stroke: rgba(239, 237, 232, 0.3);

  stroke: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const AvatarHeader = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid var(--orange-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }

  & > img {
    border-radius: 50%;
  }
`;

export const SvgLogoUserHeader = styled.svg`
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* padding: 10px; */
  padding: 2px 0;
  width: 76px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--white-color);

  background-color: var(--black-color);

  @media screen and (max-width: 1439px) {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
