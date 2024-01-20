import { getExercisesMuscles } from "api/ApiExercises";

import React, { useEffect, useState } from "react";
import { CardContainer } from "./Muscles.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";

function Muscles() {
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
  return (
    <CardContainer>
      {MusclesExercises.map(({ _id, filter, name, imgURL }) => (
        <ExercisesSubcategoriesItem
          key={_id}
          _id={_id}
          filter={filter}
          name={name}
          imgURL={imgURL}
        />
      ))}
    </CardContainer>
  );
}

export default Muscles;
