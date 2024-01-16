import React, { useState } from 'react';
import {
  AvatarHeader,
  LogoutBtn,
  Nav,
  ProfileSvg,
  StyledNavLink,
  SvgLogoUserHeader,
  UserContainer,
  UserData,
} from './UserMenu.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';

const UserMenu = () => {
  // заглушки для бека і редакса
  const avatarUser = null;

  const user = {
    avatarURL: false,
  };

  const [isActivePage, setIsActivePage] = useState('diary');

  const handleActivePage = name => {
    setIsActivePage(name);
  };

  const avatarLogo = (
    <SvgLogoUserHeader fill="rgba(239, 237, 232, 0.3)">
      <use href={`${sprite}#icon-user`}></use>
    </SvgLogoUserHeader>
  );
  return (
    <UserContainer>
      <Nav>
        <StyledNavLink
          style={
            isActivePage === 'diary'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('diary')}
          to="/diary"
        >
          Diary
        </StyledNavLink>
        <StyledNavLink
          style={
            isActivePage === 'products'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('products')}
          to="/products"
        >
          Products
        </StyledNavLink>
        <StyledNavLink
          style={
            isActivePage === 'exercises'
              ? { backgroundColor: 'var(--orange-color)' }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('exercises')}
          to="/exercises"
        >
          Exercises
        </StyledNavLink>
      </Nav>
      <UserData>
        <NavLink to={'/profile'}>
          <ProfileSvg>
            <use href={`${sprite}#icon-settings`}></use>
          </ProfileSvg>
        </NavLink>
        <AvatarHeader>{user.avatarURL ? avatarUser : avatarLogo}</AvatarHeader>
        {/* <LogoutBtn type="button" onClick={handleLogOut}> */}
        <LogoutBtn type="button">
          <span>Logout</span>
          <svg width="20px" height="20px">
            <use href={`${sprite}#icon-log-out`}></use>
          </svg>
        </LogoutBtn>
      </UserData>
    </UserContainer>
  );
};

export default UserMenu;
