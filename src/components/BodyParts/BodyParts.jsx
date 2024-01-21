import { useEffect, useState } from 'react';
import { CardContainer } from './BodyParts.styled';
import ExercisesSubcategoriesItem from 'components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

import { getExercisesBodyParts } from 'api/ApiExercises';
import { Pagination } from 'components/pagination/Pagination';

function BodyParts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listExercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesBodyParts = async () => {
      try {
        const data = await getExercisesBodyParts();
        setExercises(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesBodyParts();
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
  const allExercises = listExercises.length;

  const currentExercise = listExercises.slice(
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

export default BodyParts;
