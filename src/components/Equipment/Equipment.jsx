import { getExercisesEquipment } from 'api/ApiExercises';
import React, { useEffect, useState } from 'react';

import { CardContainer } from './Equipment.styled';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { Pagination } from 'components/pagination/Pagination';

function Equipment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ExercisesEquipment, setExercisesEquipment] = useState([]);

  useEffect(() => {
    const fetchExercisesEquipment = async () => {
      try {
        const data = await getExercisesEquipment();
        setExercisesEquipment(data.result);
        console.log('data', data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesEquipment();
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
  const allExercises = ExercisesEquipment.length;

  const currentExercise = ExercisesEquipment.slice(
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
        {allExercises !== perPage() && (
          <Pagination
            perPage={perPage()}
            changePage={changePage}
            allExercises={allExercises}
            currentPage={currentPage}
          />
        )}
      </div>
    </>
  );
}

export default Equipment;
