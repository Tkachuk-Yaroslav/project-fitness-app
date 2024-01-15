//to remove component here
import { Container } from 'components/styles/Container/Container';
import React from 'react';
import {
  HeaderContainer,
  HeaderTag,
  List,
  Nav,
  StyledLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <HeaderContainer>
          <Nav>
            <List>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/signup">SignUpPage</StyledLink>
              </li>
              <li>
                <StyledLink to="/signin">SignInPage</StyledLink>
              </li>
              <li>
                <StyledLink to="/profile">Profile Settings</StyledLink>
              </li>
              <li>
                <StyledLink to="/diary">Diary</StyledLink>
              </li>
              <li>
                <StyledLink to="/products">Products</StyledLink>
              </li>
              <li>
                <StyledLink to="/exercises">Exercises</StyledLink>
              </li>
            </List>
          </Nav>
        </HeaderContainer>
      </Container>
    </HeaderTag>
  );
};

export default Header;
