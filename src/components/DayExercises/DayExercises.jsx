import React, { useEffect, useState } from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import './scrollbarStyled.css';
import {
  ExercisesSection,
  ExercisesTitle,
  ExercisesLink,
  ProductsContainer,
} from './DayExercises.styled';
import DayExercisesItem from 'components/DayExercisesItem/DayExercisesItem';
import sprite from '../../images/sprite.svg';

import { getDiaryData } from 'api/dairy';

export const ParentContext = React.createContext();

const DayExercises = () => {
  const [diaryData, setDiaryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiaryData();
        setDiaryData(data.exercisesDone);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <ExercisesSection>
        <ProductsContainer>
          <ExercisesTitle>Exercises</ExercisesTitle>
          <ExercisesLink>
            Add exercise
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </svg>
          </ExercisesLink>
        </ProductsContainer>
        <OverlayScrollbarsComponent defer>
          {diaryData.length > 0
            ? diaryData.map(exercise => {
                return (
                  <ParentContext.Provider
                    key={exercise._id}
                    value={{ diaryData, setDiaryData }}
                  >
                    <DayExercisesItem
                      key={exercise._id}
                      exercise={exercise}
                      time={exercise.time}
                    />
                  </ParentContext.Provider>
                );
              })
            : null}
        </OverlayScrollbarsComponent>
      </ExercisesSection>
    </>
  );
};

export default DayExercises;

// import React, { useEffect, useState } from 'react';
// import 'overlayscrollbars/overlayscrollbars.css';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
// import './scrollbarStyled.css';
// import {
//   ExercisesSection,
//   ExercisesTitle,
//   ExercisesLink,
//   ProductsContainer,
// } from './DayExercises.styled';
// import DayExercisesItem from 'components/DayExercisesItem/DayExercisesItem';
// import sprite from '../../images/sprite.svg';

// import { getDiaryData } from 'api/dairy';

// const DayExercises = () => {
//   const [exercisesData, setExercisesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getDiaryData();
//         console.log(response)
//         if (response.data && Array.isArray(response.data.exercisesDone)) {
//           setExercisesData(response.data.exercisesDone);
//           localStorage.setItem('exercisesDone', JSON.stringify(response.data.exercisesDone));
//         } else {
//           console.error('Invalid response format:', response);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Перевірка на зміну масиву і оновлення стану, якщо він змінився
//     const storedExercisesDone = JSON.parse(localStorage.getItem('exercisesDone') || '[]');
//     if (JSON.stringify(storedExercisesDone) !== JSON.stringify(exercisesData)) {
//       setExercisesData(storedExercisesDone);
//     }
//   }, [exercisesData]);

//   return (
//     <>
//       <ExercisesSection>
//         <ProductsContainer>
//           <ExercisesTitle>Exercises</ExercisesTitle>
//           <ExercisesLink>
//             Add exercise
//             <svg width={16} height={16}>
//               <use xlinkHref={`${sprite}#icon-arrow-right`} />
//             </svg>
//           </ExercisesLink>
//         </ProductsContainer>
//         <OverlayScrollbarsComponent defer>
//           {exercisesData.length &&
//             exercisesData.map(exercise => (
//               <DayExercisesItem
//                 key={exercise._id}
//                 exercise={exercise}
//                 time={exercise.time}
//               />
//             ))}
//         </OverlayScrollbarsComponent>
//       </ExercisesSection>
//     </>
//   );
// };

// export default DayExercises;
