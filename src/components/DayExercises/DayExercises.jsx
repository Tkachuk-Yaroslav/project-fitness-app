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

import axios from 'axios';

const apiUrl =
  'https://project-fitness-app-back.onrender.com/api/dairy/archive';

const DayExercises = () => {
  const [exercisesData, setExercisesData] = useState([])

  const params = {
    // date: '2024-01-17T13:57:32.000Z',
    date: '23/01/2024',
  };

  useEffect(() => {
    console.log(exercisesData)
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, { params });
        setExercisesData(response.data.exercisesDone);
        console.log(response.data.exercisesDone);
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line
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
          {exercisesData.length &&
            exercisesData.map((exercise) => {
              return <DayExercisesItem key={exercise._id} exercise={exercise.exercise} time={exercise.time}/>;
            })}
        </OverlayScrollbarsComponent>
      </ExercisesSection>
    </>
  );
};

export default DayExercises;
