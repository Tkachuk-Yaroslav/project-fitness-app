import { Container } from 'components/styles/Container/Container';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import {
  Header,
  HeaderContainer,
  List,
  Nav,
  StyledLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
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
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
