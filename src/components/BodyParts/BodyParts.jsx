import { getExercisesBodyParts } from "api/ApiExercises";
import { useEffect, useState } from "react";
import { CardContainer } from "./BodyParts.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function BodyParts() {
  const location = useLocation();
  const state = useSelector((state) => state);
  console.log("state", state);
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
  console.log(listExercises);
  return (
    <CardContainer>
      {listExercises.map(({ _id, filter, name, imgURL, index }) => (
        <Link key={index} to={filter.name} state={{ from: location }}>
          <ExercisesSubcategoriesItem
            key={_id}
            filter={filter}
            name={name}
            imgURL={imgURL}
          />{" "}
        </Link>
      ))}
    </CardContainer>
  );
}

export default BodyParts;
