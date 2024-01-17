import sprite from '../../images/sprite.svg';
import { HeaderTag, LogoLink, Svg, UserContainer } from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { MobileMenuBtn } from 'components/MobileMenuBtn/MobileMenuBtn';
import { useState } from 'react';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../../redux/auth/selectors';

const Header = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  const [isOpen, setIsOpen] = useState(false);
  const onClickMenuBtn = () => {
    setIsOpen({ isOpen: !isOpen });
  };
  return (
    <HeaderTag
      style={
        isLoggedIn
          ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
          : { borderBottom: 'none' }
      }
    >
      <LogoLink to="/">
        <Svg>
          <use href={`${sprite}#icon-logo`}></use>
        </Svg>
      </LogoLink>

      <UserContainer>
        {isLoggedIn && (
          <>
            <UserMenu />
            <MobileMenuBtn onClick={onClickMenuBtn} />
            <MobileMenu isOpen={isOpen} />
          </>
        )}
      </UserContainer>
    </HeaderTag>
  );
};

export default Header;
