// import { createGlobalStyle, styled } from 'styled-components';

// export const IconSvg = styled.svg`
//   position: absolute;
//   top: 14px;
//   right: 14px;
// `;

// // export const CalendarGlobalStyles = createGlobalStyle`
// //  .react-datepicker__wrapper {
// //     position: relative;

// //   }
// //   .react-datepicker {
// //     position: absolute;
// //     left: -20px;
// //     top: 50%;
// //     transform: translate(-15%, 0%);
// //     display: flex;
// //     flex-direction: column;
// //     align-items: center;
// //     padding: 14px;
// //     background-color: #ef8964;
// //     font-family: 'Roboto', sans-serif;
// //     border-radius: 8px;
// //   }
// //   .react-datepicker__month-container {
// //     float: inherit;
// //     box-sizing: border-box;
// //   }
// //   .react-datepicker__day-names {
// //     display: flex;
// //     justify-content: space-between;
// //     align-items: center;
// //     padding-top: 14px;
// //     margin-bottom: 8px;
// //     border-top: 1px solid rgba(239, 237, 232, 0.2);
// //   }
// //   .react-datepicker__header {
// //     position: relative;
// //     background-color: #ef8964;
// //   }

// //   .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
// //     border-bottom: 0px;
// //     padding: 0;
// //   }
// //   .react-datepicker__day
// //     react-datepicker__day--018.react-datepicker__day--selected
// //     react-datepicker__day--today {
// //     outline: none;
// //     border: none;
// //   }
// //   .react-datepicker__current-month {
// //     color: #efede8;
// //     font-family: 'Roboto', sans-serif;
// //     font-size: 16px;
// //     font-weight: 500;
// //     line-height: normal;
// //     margin-bottom: 14px;
// //   }
// //   .react-datepicker__day-name {
// //     margin: 0;
// //     color: rgba(239, 237, 232, 0.5);
// //     font-family: 'Roboto', sans-serif;
// //     font-size: 14px;
// //     font-style: normal;
// //     font-weight: 500;
// //     line-height: normal;
// //   }

// //   .react-datepicker__day--disabled {
// //     opacity: 25%;
// //   }
// //   .react-datepicker__navigation {
// //     margin-top: 14px;
// //     color: white;
// //   }
// //   .react-datepicker__navigation--previous {
// //     left: 7px;
// //     width: 18px;
// //     height: 18px;
// //   }
// //   .react-datepicker__navigation--next {
// //     right: 7px;
// //     width: 18px;
// //     height: 18px;
// //   }
// //   .react-datepicker__navigation-icon::before:hover:focus {
// //     border-color: white;
// //   }
// //   .react-datepicker__week {
// //     display: flex;
// //     align-items: center;
// //     justify-content: space-between;
// //     color: white;
// //   }
// //   .react-datepicker__day {
// //     display: flex;
// //     flex-direction: column;
// //     justify-content: center;
// //     align-items: center;
// //     flex-shrink: 0;
// //     margin: 0;
// //     border-radius: 50%;
// //     color: #efede8;
// //     font-family: 'Roboto', sans-serif;
// //     font-size: 14px;
// //     font-weight: 400;
// //     line-height: 18px;
// //     text-align: center;
// //     width: 24px;
// //     height: 24px;
// //   }
// //   .react-datepicker__month {
// //     display: flex;
// //     gap: 5px;
// //     flex-direction: column;
// //     justify-content: space-between;
// //     margin: 0;
// //   }
// //   .react-datepicker__day--selected {
// //     background-color: #040404;
// //     color: #efede8;
// //     font-size: 14px;
// //   }
// //   .react-datepicker__day--selected:hover {
// //     border-radius: 50%;
// //     background-color: white;
// //   }
// //   .react-datepicker__day:hover {
// //     border-radius: 50%;
// //     background-color: white;
// //     color: #ef8964;
// //   }
// //   .react-datepicker__day--keyboard-selected {
// //     border-radius: 50%;
// //     background-color: white;
// //     color: #ef8964;
// //   }
// //   .react-datepicker__day--outside-month {
// //     opacity: 50%;
// //   }
// //   .react-datepicker__triangle {
// //     display: none;
// //   }
// // `;
// export const CalendarGlobalStyles = createGlobalStyle`
//   .react-datepicker__wrapper {
//     position: relative;

//   }
//   .react-datepicker {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-1%, 0%);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 327px;
//     height: 354px;
//     padding: 9px 18px;
//   background-color: #3e85f3;
//     font-family: Inter;
//     border-radius: 16px;
//   }
//   .react-datepicker__month-container {
//     float: inherit;
//     box-sizing: border-box;
//   }
//   .react-datepicker__header {
//     position: relative;
//     background-color: #3e85f3;
//   }
//   .react-datepicker__day-names {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 8px 8px;
//     border-bottom: 1px solid rgba(255, 255, 255, 0.4);
//   }
//   .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
//     border-bottom: 0px;
//     padding: 0;
//   }
//   .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
//     outline: none;
//     border: none;
// }
//   .react-datepicker__current-month {
//     font-family: Inter;
//     font-size: 20px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: 24px;
//     text-align: center;
//     color: white;
//   }
//   .react-datepicker__day-name {
//     margin: 0;
//    padding: 8px 8px;
//     font-family: Inter;
//     font-size: 14px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: 18px;
//     text-align: center;
//     color: white;
//   }
//   .react-datepicker__navigation {
//     margin-top: 24px;
//     color: white;
//   }
//   .react-datepicker__navigation--previous {
//     left: 7px;
//     width: 18px;
//     height: 18px;
//   }
//   .react-datepicker__navigation--next {
//     right: 7px;
//     width: 18px;
//     height: 18px;
//   }
//   .react-datepicker__navigation-icon::before:hover:focus {
//     border-color: white;
//   }
//   .react-datepicker__week {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     color: white;
//   }
//   .react-datepicker__day {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 8px;
//     flex-shrink: 0;
//     margin: 0;
//     width: 32px;
//     height: 32px;
//     border-radius: 50%;
//     color: white;
//     font-family: Inter;
//     font-size: 14px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 18px;
//     text-align: center;
//   }
//   .react-datepicker__month {
//     display: flex;
//     gap: 7px;
//     flex-direction: column;
//     justify-content: space-between;
//     padding-top: 16px;
//     margin: 0;
//   }
//   .react-datepicker__day--selected {
//     background-color:white;
//     color:#3e85f3;
//     font-size: 14px;
//   }
//   .react-datepicker__day--selected:hover {
//     border-radius: 50%;
//   background-color:white;
//   }
//   .react-datepicker__day:hover {
//     border-radius: 50%;
//     background-color:white;
//     color:#3e85f3;
//   }
//   .react-datepicker__day--keyboard-selected {
//     border-radius: 50%;
//     background-color:white;
//     color:#3e85f3;
//   }
//   .react-datepicker__day--weekend {
//     opacity: 50%;
//   }
// .react-datepicker__day--outside-month {
//     background-color: transparent;
//     pointer-events: none;
//     opacity: 0;
//   }
//   .react-datepicker__view-calendar-icon input {
//     padding: 6px 10px 5px 13px;
//   }
//   .react-datepicker__triangle {
//     visibility: hidden;
//   }
// `;

// export const TitleWrapper = styled.button`
//   width: 195px;
//   color: #ffffff;
//   background: #3e85f3;
//   border-radius: 8px;
//   font-weight: 700;
//   line-height: 18px;
//   text-align: center;
//   text-transform: uppercase;
//   padding: 8px 12px;
//   font-size: 16px;
//   justify-content: space-around;
//   align-items: center;
// `;

//-------------------------------
import { createGlobalStyle, styled } from 'styled-components';

export const IconSvg = styled.svg`
  position: absolute;
  top: 36px;
  right: 14px;
`;

export const CalendarGlobalStyles = createGlobalStyle`
 .react-datepicker__wrapper {
    position: relative;
    
  }
  .react-datepicker {
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translate(-15%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 14px;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;    
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .react-datepicker__day--disabled {
    opacity: 25%;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;

  &:hover {
    border-color: #e6533c; /* Змінюємо колір бордера на червоний при ховері */
  }
`;
