import { useEffect, useState } from 'react';
import { CardContainer } from './BodyParts.styled';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

import { Pagination } from 'components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { fetchBodyParts } from '../../redux/exercises/thunks';

function BodyParts() {
  const [currentPage, setCurrentPage] = useState(1);
  const { bodyParts, isLoading } = useSelector((state) => state.exercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBodyParts());
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
  const allExercises = bodyParts.length;

  const currentExercise = bodyParts.slice(
    firstExerciseIdx,
    lastExerciseIdx
  );

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
      {isLoading && <Loader />}
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

export default BodyParts;
