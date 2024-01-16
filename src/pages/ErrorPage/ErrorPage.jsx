import { Container } from 'components/styles/Container/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import {
  GoHomeBtn,
  Text404Container,
  Text404,
  TextMessage404,
  Page404Container,
  Svg,
  LogoLink,
} from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Page404Container>
      <Text404Container>
        <LogoLink to="/">
          <Svg>
            <use href={`${sprite}#icon-logo-white`}></use>
          </Svg>
        </LogoLink>
        <Text404>404</Text404>
        <TextMessage404>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </TextMessage404>

        <GoHomeBtn type="button">
          <Link to="/">Go Home</Link>
        </GoHomeBtn>
      </Text404Container>
    </Page404Container>
  );
};

export default ErrorPage;
