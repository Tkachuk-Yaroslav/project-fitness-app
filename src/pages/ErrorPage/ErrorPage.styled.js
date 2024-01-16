import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page404Container = styled.div`
  background-color: var(--black-color);
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url('/images/side-view-people-training-gym.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
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

export const Text404Container = styled.div`
  background-color: var(--orange-color);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;

  max-width: 240px;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 420px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 669px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;

export const Text404 = styled.h1`
  color: var(--white-color);
  font-size: 66px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-top: 213px;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 0.9;
    margin-top: 260px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 172px;
  }
`;

export const TextMessage404 = styled.p`
  color: var(--white-color);
  font-size: 14px;
  line-height: 1.29;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 28px;
  }
`;

export const GoHomeBtn = styled.button`
  margin-top: 28px;
  padding: 12px 40px;
  background-color: var(--orange-color);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: var(--white-color);
  font-size: 16px;
  line-height: 1.1;

  &:hover {
    background-color: var(--light-orange-color);
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
