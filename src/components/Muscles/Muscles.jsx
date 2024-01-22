import React, { useEffect, useState } from 'react';
import { CardContainer } from './Muscles.styled';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { Pagination } from 'components/pagination/Pagination';
import { fetchMuscles } from '../../redux/exercises/thunks';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

function Muscles() {
  const [currentPage, setCurrentPage] = useState(1);
  const { muscles, isLoading } = useSelector(state => state.exercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMuscles());
  }, [dispatch]);

  function perPage() {
    let exePerPage;
    if (window.matchMedia('(min-width: 1440px)').matches) {
      exePerPage = 10;
    } else {
      exePerPage = 9;
    }

    return exePerPage;
  }

  const lastExerciseIdx = currentPage * perPage();
  const firstExerciseIdx = lastExerciseIdx - perPage();
  const allExercises = muscles.length;

  const currentExercise = muscles.slice(firstExerciseIdx, lastExerciseIdx);

  const changePage = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      {isLoading && <Loader />}
      <CardContainer>
        {currentExercise.map(({ _id, filter, name, imgURL }) => (
          <ExercisesSubcategoriesItem
            key={_id}
            filter={filter}
            name={name}
            imgURL={imgURL}
          />
        ))}
      </CardContainer>
      <div>
        <Pagination
          perPage={perPage()}
          changePage={changePage}
          allExercises={allExercises}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default Muscles;
