import React, { useEffect, useState } from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import '../../components/styles/ScrollbarStyled/scrollbarStyled.css'; 
import {
  ExercisesSection,
  ExercisesTitle,
  ExercisesLink,
  ProductsContainer,
  SvgExercise,
  NoDataTitle, 
   NoDataWrap, ExercisesTitleList, ExercisesTitleItem
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
          <ExercisesLink to={'/exercises'}>
            Add exercise
            <SvgExercise width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-right`} />
            </SvgExercise>
          </ExercisesLink>
        </ProductsContainer>
        {diaryData.length > 0 ? (
  <ExercisesTitleList>
    <ExercisesTitleItem $index={0}>Part</ExercisesTitleItem>
    <ExercisesTitleItem $index={1}>Equipment</ExercisesTitleItem>
    <ExercisesTitleItem $index={2}>Name</ExercisesTitleItem>
    <ExercisesTitleItem $index={3}>Target</ExercisesTitleItem>
    <ExercisesTitleItem $index={4}>Burned Calories</ExercisesTitleItem>
    <ExercisesTitleItem>Time</ExercisesTitleItem>
  </ExercisesTitleList>
) : null}
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
            : <NoDataWrap><NoDataTitle>Not found exercises</NoDataTitle></NoDataWrap>}
        </OverlayScrollbarsComponent>
      </ExercisesSection>
    </>
  );
};

export default DayExercises;
