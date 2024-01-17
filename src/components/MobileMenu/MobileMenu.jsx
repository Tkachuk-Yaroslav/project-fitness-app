import { useState, useEffect, useCallback } from 'react';
import {
  MenuWrapper,
  Overlay,
  CloseButton,
  Svg,
  Logout,
  NavMenu,
  NavMenuLink,
  LogoutSvg,
} from './MobileMenu.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunks';

const MobileMenu = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);

  //   const closeMenu = () => {
  //     setMenuIsOpen(false);
  //   };

  //   const handleEscKey = event => {
  //     if (event.key === 'Escape') {
  //       closeMenu();
  //     }
  //   };

  const closeMenu = useCallback(() => {
    setMenuIsOpen(false);
  }, [setMenuIsOpen]);

  const handleEscKey = useCallback(
    event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    },
    [closeMenu]
  );

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuIsOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [menuIsOpen, handleEscKey]);

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    closeMenu();
    dispatch(logoutThunk());
  };
  return (
    <>
      {menuIsOpen && <Overlay onClick={handleBackdropClick}></Overlay>}
      <MenuWrapper className={menuIsOpen ? 'shown' : 'hidden'}>
        <CloseButton onClick={closeMenu}>
          <Svg>
            <use href={`${sprite}#icon-x`} />
          </Svg>
        </CloseButton>
        <NavMenu>
          <NavMenuLink to="/diary" onClick={closeMenu}>
            Diary
          </NavMenuLink>
          <NavMenuLink to="/products" onClick={closeMenu}>
            Products
          </NavMenuLink>
          <NavMenuLink to="/exercises" onClick={closeMenu}>
            Exercises
          </NavMenuLink>
        </NavMenu>
        <Logout type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <LogoutSvg>
            <use href={`${sprite}#icon-log-out-white`} />
          </LogoutSvg>
        </Logout>
      </MenuWrapper>
    </>
  );
};

export default MobileMenu;
