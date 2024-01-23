import styled from 'styled-components';

import imagePathDesktopAndTablet from '../../images/products-1x.jpg';
import imagePathDesktopAndTablet2x from '../../images/products-2x.jpg';

export const PageBgWrapperCont = styled.div`
  overflow: hidden;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 100%;
    z-index: -10;
    background: no-repeat;
  }
  @media screen and (min-width: 768px) {
    &::before {
      width: 670px;
      height: 1005px;
      background-image: url(${imagePathDesktopAndTablet});
      transform: translate(-650px, 85px);
    }
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &::before {
        width: 670px;
        height: 1005px;
        background-image: url(${imagePathDesktopAndTablet2x});
      }
    }
  }
  @media screen and (min-width: 1440px) {
    &::before {
      transform: translate(-30vw, 85px);
    }
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      &::before {
      }
    }
  }
  @media screen and (min-width: 2560px) {
    &::before {
      transform: translate(-43vw, 85px);
    }
  }
`;
