import { getExercisesMuscles } from 'api/ApiExercises';

import React, { useEffect, useState } from 'react';
import { CardContainer } from './Muscles.styled';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { Pagination } from 'components/pagination/Pagination';

function Muscles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [MusclesExercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesMuscles = async () => {
      try {
        const data = await getExercisesMuscles();
        setExercises(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesMuscles();
  }, []);

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
  const allExercises = MusclesExercises.length;

  const currentExercise = MusclesExercises.slice(
    firstExerciseIdx,
    lastExerciseIdx
  );

  const changePage = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
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
