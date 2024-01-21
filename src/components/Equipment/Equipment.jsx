import { getExercisesEquipment } from "api/ApiExercises";
import React, { useEffect, useState } from "react";

import { CardContainer } from "./Equipment.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";

function Equipment() {
  // const filter = 'Equipment';
  const [ExercisesEquipment, setExercisesEquipment] = useState([]);
  useEffect(() => {
    const fetchExercisesEquipment = async () => {
      try {
        const data = await getExercisesEquipment();
        setExercisesEquipment(data.result);
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesEquipment();
  }, []);

  return (
    <CardContainer>
      {ExercisesEquipment.map(({ _id, filter, name, imgURL }) => (
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

export default Equipment;
