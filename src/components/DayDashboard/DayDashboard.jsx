import React from 'react';
import {
  DashboardSection,
  DashboardList,
  DashboardItems,
  DashboardTitle,
  DashboardData,
  DashboardText,
  IconWrap,
  DashboardTextContainer,
} from './DayDashboard.styled';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';

const DayDashboard = () => {
  const { user } = useSelector(state => state.auth)
  return (
      <div>
      <DashboardSection>
        <DashboardList>
          <DashboardItems $index={1}>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-fork-knife`} />
              </svg>
              Daily calorie intake
            </DashboardTitle>
            <DashboardData>{user.bmr}</DashboardData>
          </DashboardItems>
          <DashboardItems $index={1}>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-dumbbell`} />
              </svg>
              Daily physical activity
            </DashboardTitle>
            <DashboardData>110 min</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-apple`} />
              </svg>
              Сalories consumed
            </DashboardTitle>
            <DashboardData>707</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-fire`} />
              </svg>
              Сalories burned
            </DashboardTitle>
            <DashboardData>855</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-bubble`} />
              </svg>
              Calories remaining
            </DashboardTitle>
            <DashboardData>1493</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-running-figure`} />
              </svg>
              Sports remaining
            </DashboardTitle>
            <DashboardData>85 min</DashboardData>
          </DashboardItems>
        </DashboardList>
        <DashboardTextContainer>
          <IconWrap>
            <svg width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-attention`} />
            </svg>
          </IconWrap>
          <DashboardText>
            Record all your meals in the calorie diary every day. This will help
            you be aware of your nutrition and make informed choices.
          </DashboardText>
        </DashboardTextContainer>
      </DashboardSection>
    </div>
  );
};

export default DayDashboard;
