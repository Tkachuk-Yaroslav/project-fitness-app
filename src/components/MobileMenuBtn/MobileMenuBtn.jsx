import sprite from '../../images/sprite.svg';
import { MobButton, Svg } from './MobileMenuBtn.styled';

export const MobileMenuBtn = ({ onClick }) => {
  return (
    <MobButton onClick={onClick}>
      <Svg>
        <use href={`${sprite}#icon-menu`}></use>
      </Svg>
    </MobButton>
  );
};
