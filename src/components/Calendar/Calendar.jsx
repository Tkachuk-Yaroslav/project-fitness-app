import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg, InputField } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../images/sprite.svg';
import { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = date => {
    setSelectedDate(date);
    console.log(date);
  };
  //   console.log(selectedDate);

  return (
    <>
      <div style={{ width: '187px', position: 'relative' }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#icon-calendar-white`}></use>
        </IconSvg>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<InputField style={{ cursor: 'pointer' }} />}
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
