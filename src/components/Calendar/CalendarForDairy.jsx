import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles,IconSvgDiary,InputFieldDiary, CalendarDiaryStyles} from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../images/sprite.svg';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const CalendarForDiary = ({ name, onChangeData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = format(new Date(selectedDate), 'dd/MM/yyyy');

  useEffect(() => {
    // eslint-disable-next-line
    const params = { date: formatDate };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDateChange = async date => {
    console.log(date, 'date');
    setSelectedDate(date);
    onChangeData(date);
  };
  return (
    <>
      <CalendarDiaryStyles>
        <IconSvgDiary width="18" height="18">
          <use href={`${sprite}#icon-calendar-orange`}></use>
        </IconSvgDiary>

        <DatePicker
          // {...field}
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<InputFieldDiary name={name} style={{ cursor: 'pointer' }} />}
          dateFormat={'dd/MM/yyyy'}
          calendarStartDay={1}
          formatWeekDay={day => day.substring(0, 1)}
          placeholderText={selectedDate === null ? 'Birthday' : null}
        />

        <CalendarGlobalStyles />
      </CalendarDiaryStyles>
    </>
  );
};

export default CalendarForDiary;
