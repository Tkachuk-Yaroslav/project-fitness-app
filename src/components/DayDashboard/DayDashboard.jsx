import React from 'react';
import {
  DashboardSection,
  DashboardList,
  DashboardItems,
  DashboardTitle,
  DashboardData,
  DashboardText,
} from './DayDashboard.styled';

const DayDashboard = () => {
  return (
    <div>
      <DashboardSection>
        <DashboardList>
          <DashboardItems>
            <DashboardTitle>Daily calorie intake</DashboardTitle>
            <DashboardData>2200</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>Daily physical activity</DashboardTitle>
            <DashboardData>110 min</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>Сalories consumed</DashboardTitle>
            <DashboardData>707</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>Сalories burned</DashboardTitle>
            <DashboardData>855</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>Calories remaining</DashboardTitle>
            <DashboardData>1493</DashboardData>
          </DashboardItems>
          <DashboardItems>
            <DashboardTitle>Sports remaining</DashboardTitle>
            <DashboardData>85 min</DashboardData>
          </DashboardItems>
        </DashboardList>
        <DashboardText>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </DashboardText>
      </DashboardSection>
    </div>
  );
};

export default DayDashboard;
