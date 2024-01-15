import sprite from '../../images/sprite.svg';
import { MobButton } from './MobileMenuBtn.styled';

export const MobileMenuBtn = ({ onClick }) => {
  return (
    <MobButton onClick={onClick}>
      <svg width="20" height="20">
        <use href={`${sprite}#icon-menu`}></use>
      </svg>
    </MobButton>
  );
};
