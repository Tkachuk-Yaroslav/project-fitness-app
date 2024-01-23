import styled from 'styled-components';

import imagePathMob from '../../images/training-bg-mob.png';
import imagePathMob2x from '../../images/training-bg-mob-2x.png';
import imagePathMobDark from '../../images/training-bg-mob-dark.png';
import imagePathMobDark2x from '../../images/training-bg-mob-dark-2x.png';
import imagePathDesktopAndTablet from '../../images/training-bg-tab-desk.png';
import imagePathDesktopAndTablet2x from '../../images/training-bg-tab-desk-2x.png';

export const TrainingBgWrapperCont = styled.div`
  overflow: hidden;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    /* left: 50%; */
    left: 100%;
    width: 446px;
    height: 669px;
    background-image: url(${imagePathMob});
    /* transform: translate(-110.5px, 241px); */
    transform: translate(-298px, 241px);
    background-size: 446px 669px;
    z-index: -10;
  }
  &.pageSign {
    &::before {
      background-image: url(${imagePathMobDark});
    }
  }
  &.page404 {
    &::before {
      /* transform: translate(-80.5px, 241px); */
      transform: translate(-268px, 241px);
    }
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    &::before {
      width: 446px;
      height: 669px;
      background-image: url(${imagePathMob2x});
    }
    &.pageSign {
      &::before {
        background-image: url(${imagePathMobDark2x});
      }
    }
  }
  @media screen and (min-width: 768px) {
    &::before {
      width: 670px;
      height: 1005px;
      background-image: url(${imagePathDesktopAndTablet});
      /* transform: translate(-53px, 131px); */
      transform: translate(-437px, 131px);
      background-size: 670px 1005px;
    }
    &.pageSign {
      &::before {
        background-image: url(${imagePathDesktopAndTablet});
      }
    }
    &.page404 {
      &::before {
        /* transform: translate(-53px, 131px); */
        transform: translate(-437px, 131px);
      }
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
      background-image: url(${imagePathDesktopAndTablet});
      /* transform: translate(50px, -152px); */
      transform: translate(-670px, -152px);
    }
    &.page404 {
      &::before {
        /* transform: translate(50px, -152px); */
        transform: translate(-670px, -152px);
      }
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
`;
