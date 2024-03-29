import React, { useContext } from 'react';
import './styles.css';

import {
  ProductsContainer,
  ProductsList,
  ProductsItem,
  ProductsTitle,
  ProductsData,
  TrashBtn,
} from './DayExercisesItem.styled';
import sprite from '../../images/sprite.svg';
import axios from 'axios';
import { getDiaryData } from 'api/dairy';

import { Parent2Context } from '../DayExercises/DayExercises';
import { DiaryContext } from '../../pages/DiaryPage/DiaryPage';

const DayExercisesItem = (exercise, calendarData) => {
  const { setDiaryData } = useContext(Parent2Context);
  const { setDataDash } = useContext(DiaryContext);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://project-fitness-app-back.onrender.com/api/dairy/delExercise/${exercise.exercise._id}`
      );
      const data = await getDiaryData(exercise.calendarData);
      setDiaryData(data.exercisesDone);
      setDataDash({
        consumedBurned: data.consumedBurned,
        consumedCalories: data.consumedCalories,
      });
    } catch (error) {
      console.error('Error deleting exercise:', error);
    }
  };

  return (
    <ProductsContainer>
      <ProductsList>
        <ProductsItem $index={0}>
          <ProductsTitle>Part</ProductsTitle>
          <ProductsData>{exercise.exercise.exercise.bodyPart}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={1}>
          <ProductsTitle>Equipment</ProductsTitle>
          <ProductsData>{exercise.exercise.exercise.equipment}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={2}>
          <ProductsTitle>Name</ProductsTitle>
          <ProductsData>{exercise.exercise.exercise.name}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={3}>
          <ProductsTitle>Target</ProductsTitle>
          <ProductsData>{exercise.exercise.exercise.target}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={4}>
          <ProductsTitle>Burned Calories</ProductsTitle>
          <ProductsData>{exercise.exercise.calories}</ProductsData>
        </ProductsItem>
        <ProductsItem $index={5}>
          <ProductsTitle>Time</ProductsTitle>
          <ProductsData>{exercise.time}</ProductsData>
        </ProductsItem>
      </ProductsList>
      <TrashBtn onClick={handleDelete}>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-trash`} />
        </svg>
      </TrashBtn>
    </ProductsContainer>
  );
};

export default DayExercisesItem;
