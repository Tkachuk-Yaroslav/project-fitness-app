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
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunks';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logoutThunk());
  const avatarUser = useSelector(state => state.auth.user.avatarURL);
  // заглушки для бека
  // const avatarUser = null;

  const user = {
    avatarURL: avatarUser,
  };

  const [isActivePage, setIsActivePage] = useState('unknown');

  const handleActivePage = name => {
    setIsActivePage(name);
  };

  const handleProfileClick = () => {
    setIsActivePage('unknown');
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
          aria-label="Click to go to the Diary page"
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
          aria-label="Click to go to the Products page"
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
          aria-label="Click to go to the Exercises page"
        >
          Exercises
        </StyledNavLink>
      </Nav>
      <UserData>
        <NavLink
          to={'/profile'}
          aria-label="Click to go to the Profile page"
          onClick={handleProfileClick}
        >
          <ProfileSvg>
            <use href={`${sprite}#icon-settings`}></use>
          </ProfileSvg>
        </NavLink>
        <AvatarHeader>
          <img src={user.avatarURL ? avatarUser : avatarLogo} alt="" />
        </AvatarHeader>
        {/* <LogoutBtn type="button" onClick={handleLogOut}> */}
        <LogoutBtn
          type="button"
          onClick={handleLogOut}
          aria-label="LOGOUT button. Click to exit"
        >
          <span>Logout</span>
          <svg>
            <use href={`${sprite}#icon-log-out`}></use>
          </svg>
        </LogoutBtn>
      </UserData>
    </UserContainer>
  );
};

export default UserMenu;
