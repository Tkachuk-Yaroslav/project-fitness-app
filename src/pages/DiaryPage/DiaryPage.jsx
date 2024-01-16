import React from 'react';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import DayProducts from 'components/DayProducts/DayProducts';
import DayExercises from 'components/DayExercises/DayExercises';
import { DiaryContainer, DiaryInfoContainer } from './DiaryPage.styled';
import { Container } from 'components/styles/Container/Container';

const DiaryPage = () => {
  return (
    <Container>
      <DiaryContainer>
        <DayDashboard />
        <DiaryInfoContainer>
          <DayProducts />
          <DayExercises />
        </DiaryInfoContainer>
      </DiaryContainer>
    </Container>
  );
};

export default DiaryPage;
