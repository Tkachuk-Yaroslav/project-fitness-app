import React, { useState } from 'react';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import DayProducts from 'components/DayProducts/DayProducts';
import DayExercises from 'components/DayExercises/DayExercises';
import { DiaryContainer, DiaryInfoContainer } from './DiaryPage.styled';
import { Container } from 'components/styles/Container/Container';
import CalendarForDairy from 'components/Calendar/CalendarForDairy';
import { Formik } from 'formik';
import WithDataRedirect from 'HOC/HocRedirect';
import { format } from 'date-fns';

const DiaryPage = () => {
  const [calendarDate, setcalendarDate] = useState(
    new Date()
    // format(new Date(), 'dd/MM/yyyy')
  );
  const formatDateDP = format(new Date(calendarDate), 'dd/MM/yyyy');
  console.log('formatDateDP', formatDateDP);
  const handleChange = newState => {
    setcalendarDate(newState);
  };

  return (
    <Container>
      <Formik
        initialValues={{
          day: new Date(),
        }}
      >
        {() => (
          <form>
            <CalendarForDairy name="day" onChangeData={handleChange} />
          </form>
        )}
      </Formik>

      <DiaryContainer>
        <DayDashboard date={formatDateDP} />
        <DiaryInfoContainer>
          <DayProducts date={formatDateDP} />
          {/* <DayExercises date={calendarDate} /> */}
        </DiaryInfoContainer>
      </DiaryContainer>
    </Container>
  );
};
const WrapedDiaryPage = WithDataRedirect(DiaryPage);
export default WrapedDiaryPage;
