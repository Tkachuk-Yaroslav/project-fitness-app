import { NavLink } from 'react-router-dom/dist';
import styled from 'styled-components';

export const CategoriesList = styled.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 72px;
  }
`;
export const ListElement = styled.li`
  align-items: center;
`;
export const LinkStyled = styled(NavLink)`
  position: relative;
  display: block;
  color: rgba(239, 237, 232, 0.4);

  &.active {
    color: var(--white-color);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: var(--light-orange-color);
      border-radius: 2px;
    }
  }
`;
