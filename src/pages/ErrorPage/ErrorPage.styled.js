import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import heroMobile1 from '../../images/hero-mobile-1x.jpg';
// import heroMobile2 from '../../images/hero-mobile-2x.jpg';
// import heroTablet1 from '../../images/hero-tablet-1x.jpg';
// import heroTablet2 from '../../images/hero-tablet-2x.jpg';
// import hero1 from '../../images/hero-1x.jpg';
// import hero2 from '../../images/hero-2x.jpg';

export const ContainerError = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Page404Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  margin-top: -61px;

  @media screen and (min-width: 768px) {
    margin-top: -84px;
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

export const BgImgContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(4, 4, 4, 1) 5%,
    rgba(255, 255, 255, 0) 30%
  );
`;

// export const BgImgContainer = styled.div`
//   /* width: 135px; */
//   width: 100%;
//   background-image: url(${heroMobile1});
//   background-image: -webkit-image-set(
//     url(${heroMobile1}) 1x,
//     url(${heroMobile2}) 2x
//   );
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;

//   @media screen and (min-width: 375px) {
//     width: 135px;
//   }

//   @media screen and (min-width: 768px) {
//     width: 348px;
//     background-image: -webkit-image-set(
//       url(${heroTablet1}) 1x,
//       url(${heroTablet2}) 2x
//     );
//   }

//   @media screen and (min-width: 1440px) {
//     width: 772px;
//     height: 800px;
//     background-image: -webkit-image-set(url(${hero1}) 1x, url(${hero2}) 2x);
//   }
// `;
