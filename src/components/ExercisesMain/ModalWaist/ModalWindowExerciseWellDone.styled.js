import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const SvgIconX = styled.svg`
  width: 22px;
  height: 22px;
  stroke: var(--white-color);
  position: absolute;
  top: 16px;
  right: 16px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const LinkToDiary = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
`;

export const NextProductBtn = styled.button`
  margin-top: 24px;
  padding: 12px 32px;
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
    line-height: 1.2;
    margin-top: 32px;
    padding: 14px 32px;
  }
`;

export const WellDoneText = styled.h2`
  font-size: 24px;
  line-height: 1.3;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const CaloriesWrapp = styled.div`
  margin-top: 16px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
`;

export const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black-color);
  border: 1px solid rgba(239, 237, 232, 0.2);
  box-shadow: 24px;
  border-radius: 12px;
  padding: 48px 80px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 430px;
  }
`;
