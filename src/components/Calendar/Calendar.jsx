import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg, InputField } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../images/sprite.svg';
import { useState, useEffect } from 'react';
import { useField } from 'formik';

const Calendar = ({ name }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [field, , { setValue }] = useField(name);
  useEffect(() => {
    handleDateChange(new Date(field.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDateChange = async date => {
    setSelectedDate(date);
    setValue(date);
    console.log(field);
  };
  return (
    <>
      <div style={{ width: 150, position: 'relative', paddingTop: 22 }}>
        <IconSvg width="18" height="18">
          <use href={`${sprite}#icon-calendar-white`}></use>
        </IconSvg>

        <DatePicker
          {...field}
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
