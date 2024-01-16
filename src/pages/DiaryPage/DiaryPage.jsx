
import React from 'react';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import DayProducts from 'components/DayProducts/DayProducts';
import DayExercises from 'components/DayExercises/DayExercises';
import { DiaryContainer, DiaryInfoContainer } from './DiaryPage.styled';

const DiaryPage = () => {
  return (
    <DiaryContainer>
      <DayDashboard />
      <DiaryInfoContainer>
        <DayProducts />
        <DayExercises />
      </DiaryInfoContainer>
    </DiaryContainer>

  );
};

export default DiaryPage;
