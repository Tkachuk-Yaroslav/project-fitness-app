import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg, InputField } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../images/sprite.svg';
import { useState, useEffect } from 'react';
import { useField } from 'formik';
import { setExerciseThunk } from '../../redux/diaryPage/thunk';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

const Calendar = ({ name, onChangeData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log('selectedDate', selectedDate);
  const dispatch = useDispatch();

  // const formatDate = format(new Date(selectedDate), 'dd/MM/yyyy');
  // console.log('formatDate', formatDate);
  // const formatDateString = String(formatDate);
  // console.log('formatDateString', formatDateString.toisosstring);

  useEffect(() => {
    const params = { date: selectedDate };
    dispatch(setExerciseThunk(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const handleDateChange = async date => {
    setSelectedDate(date);
    onChangeData(date);
  };
  return (
    <>
      <div style={{ width: 150, position: 'relative', paddingTop: 22 }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#icon-calendar-white`}></use>
        </IconSvg>

        <DatePicker
          // {...field}
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<InputField name={name} style={{ cursor: 'pointer' }} />}
          dateFormat={'dd/MM/yyyy'}
          calendarStartDay={1}
          formatWeekDay={day => day.substring(0, 1)}
          placeholderText={selectedDate === null ? 'Birthday' : null}
        />

        <CalendarGlobalStyles />
      </div>
    </>
  );
};

export default Calendar;
