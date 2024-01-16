import {
  ButtonAddAvatar,
  ButtonWrapper,
  TextInfoUser,
  TextItemUser,
  TextUser,
  Title2,
  UserCardItemStyled,
  UserCardListStyled,
  WrapperAvatar,
  WrapperSVG,
  WrapperSVGText,
  WrapperUser,
} from './UserCard.styled';
import sprite from '../../images/sprite.svg';
import { LogoutBtn } from 'components/UserMenu/UserMenu.styled';

const UserCard = () => {
  return (
    <div>
      <WrapperUser>
        <WrapperAvatar>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <path
              d="M20.5013 0.333374C23.1977 0.333374 25.7836 1.42206 27.6902 3.35994C29.5969 5.29782 30.668 7.92614 30.668 10.6667C30.668 13.4073 29.5969 16.0356 27.6902 17.9735C25.7836 19.9114 23.1977 21.0001 20.5013 21.0001C17.8049 21.0001 15.219 19.9114 13.3124 17.9735C11.4058 16.0356 10.3346 13.4073 10.3346 10.6667C10.3346 7.92614 11.4058 5.29782 13.3124 3.35994C15.219 1.42206 17.8049 0.333374 20.5013 0.333374ZM20.5013 41.6667C20.5013 41.6667 40.8347 41.6667 40.8347 36.5001C40.8347 30.3001 30.9222 23.5834 20.5013 23.5834C10.0805 23.5834 0.167969 30.3001 0.167969 36.5001C0.167969 41.6667 20.5013 41.6667 20.5013 41.6667Z"
              fill="#EFEDE8"
              fillOpacity="0.1"
            />
          </svg>
          <ButtonAddAvatar>
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-add-avatar`} />
            </svg>
          </ButtonAddAvatar>
        </WrapperAvatar>
        <div>
          <Title2>Anna Rybachok</Title2>
          <TextUser>User</TextUser>
        </div>
      </WrapperUser>
      <UserCardListStyled>
        <UserCardItemStyled>
          <WrapperSVGText>
            <svg width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-fork-knife`} />
            </svg>
            <TextItemUser>Daily calorie intake</TextItemUser>
          </WrapperSVGText>
          <Title2 className="number">0</Title2>
        </UserCardItemStyled>
        <UserCardItemStyled>
          <WrapperSVGText>
            <svg width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-dumbbell`} />
            </svg>
            <TextItemUser>Daily physical activity</TextItemUser>
          </WrapperSVGText>
          <Title2 className="number">0 min</Title2>
        </UserCardItemStyled>
      </UserCardListStyled>
      <WrapperSVGText>
        <WrapperSVG>
          <svg width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-attention`} />
          </svg>
        </WrapperSVG>

        <TextInfoUser>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </TextInfoUser>
      </WrapperSVGText>
      <ButtonWrapper>
        <LogoutBtn type="button">
          <span>Logout</span>
          <svg>
            <use href={`${sprite}#icon-log-out`}></use>
          </svg>
        </LogoutBtn>
      </ButtonWrapper>
    </div>
  );
};
export default UserCard;
