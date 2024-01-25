import React, { useState } from 'react';
import DayDashboard from 'components/DayDashboard/DayDashboard';
import DayProducts from 'components/DayProducts/DayProducts';
import DayExercises from 'components/DayExercises/DayExercises';
import { DiaryContainer, DiaryInfoContainer } from './DiaryPage.styled';
import { Container } from 'components/styles/Container/Container';
import { Formik } from 'formik';
import WithDataRedirect from 'HOC/HocRedirect';
import CalendarForDiary from 'components/Calendar/CalendarForDairy';
import { format } from 'date-fns';

export const DiaryContext = React.createContext();
const DiaryPage = () => {
  const [data, setData] = useState(new Date());
  const [dataDash, setDataDash] = useState({});
  const formatDateDP = format(new Date(data), 'dd/MM/yyyy');
  const handleChange = newState => {
    setData(newState);
  };

  return (
    <Container>
      <div>
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
      </div>

      <DiaryContainer>
        <DiaryContext.Provider value={{ dataDash, setDataDash }}>
          <DayDashboard calendarData={formatDateDP} dataDash={dataDash} />

          <DiaryInfoContainer>
            <DayProducts calendarData={formatDateDP} />
            <DayExercises calendarData={formatDateDP} />
          </DiaryInfoContainer>
        </DiaryContext.Provider>
      </DiaryContainer>
    </Container>
  );
};
const WrappedDiaryPage = WithDataRedirect(DiaryPage);
export default WrappedDiaryPage;
