import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, IconSvg, InputField } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useField } from 'formik';

const Calendar = ({ onChange }) => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [field, , { setValue }] = useField('birthday');
	const handleDateChange = async (date) => {
		setSelectedDate(date);
		setValue(date);
		console.log(field);
	};
	return (
		<>
			<div style={{ width: '187px', position: 'relative' }}>
				<IconSvg width='18' height='18'>
					<use href={`${sprite}#icon-calendar-white`}></use>
				</IconSvg>

				<DatePicker
					{...field}
					selected={selectedDate}
					onChange={handleDateChange}
					customInput={<InputField name='birthday' style={{ cursor: 'pointer' }} />}
					dateFormat={'dd/MM/yyyy'}
					calendarStartDay={1}
					formatWeekDay={(day) => day.substring(0, 1)}
					placeholderText={selectedDate === null ? 'Birthday' : null}
				/>

				<CalendarGlobalStyles />
			</div>
		</>
	);
};

export default Calendar;

// import DatePicker from 'react-datepicker';
// import { CalendarGlobalStyles, IconSvg, InputField } from './Calendar.styled';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// import sprite from '../../images/sprite.svg';
// // import { useState } from 'react';
// import { useField } from 'formik';

// const Calendar = ({ name = '' }) => {
//   const [field, meta, helpers] = useField(name);
//   const { value } = meta;
//   const { setValue } = helpers;
//   console.log(Date.parse(value));

//   // const [selectedDate, setSelectedDate] = useState(null);
//   const handleDateChange = date => {
//     setValue(date);
//   };

//   return (
//     <>
//       <div style={{ width: '187px', position: 'relative' }}>
//         <IconSvg width="18" height="18">
//           <use href={`${sprite}#icon-calendar-white`}></use>
//         </IconSvg>

//         <DatePicker
//           {...field}
//           selected={value}
//           onChange={handleDateChange}
//           customInput={<InputField style={{ cursor: 'pointer' }} />}
//           dateFormat={'dd/MM/yyyy'}
//           calendarStartDay={1}
//           formatWeekDay={day => day.substring(0, 1)}
//           placeholderText={value === null ? 'Birthday' : null}
//         />

//         <CalendarGlobalStyles />
//       </div>
//     </>
//   );
// };

// export default Calendar;
