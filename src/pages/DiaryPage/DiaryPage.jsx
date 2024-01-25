import React, { useState } from 'react';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import DayProducts from 'components/DayProducts/DayProducts';
import DayExercises from 'components/DayExercises/DayExercises';
import { DiaryContainer, DiaryInfoContainer, DiaryTitleContainer, DiaryTitle } from './DiaryPage.styled';
import { Container } from 'components/styles/Container/Container';
import { Formik } from 'formik';
import WithDataRedirect from 'HOC/HocRedirect';
import CalendarForDiary from 'components/Calendar/CalendarForDairy';
import { format } from 'date-fns';
const DiaryPage = () => {
  const [data, setData] = useState(new Date());
  const formatDateDP = format(new Date(data), 'dd/MM/yyyy');
  console.log('formatDateDP', formatDateDP);
  const handleChange = newState => {
    setData(newState);
  };

  return (
    <Container >
 <DiaryTitleContainer>
 <DiaryTitle>Diary</DiaryTitle>
      <Formik
        initialValues={{
          day: new Date(),
        }}
      >
        {() => (
          <form>
            <CalendarForDiary name="day" onChangeData={handleChange} />
          </form>
        )}
      </Formik>
 </DiaryTitleContainer>

      <DiaryContainer>
        <DayDashboard calendarData={formatDateDP} />
        <DiaryInfoContainer>
          <DayProducts calendarData={formatDateDP} />
          <DayExercises calendarData={formatDateDP} />
        </DiaryInfoContainer>
      </DiaryContainer>
    </Container>
  );
};
const WrapedDiaryPage = WithDataRedirect(DiaryPage);
export default WrapedDiaryPage;
