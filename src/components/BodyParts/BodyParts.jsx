import { getExercisesBodyParts } from "api/ApiExercises";
import { useEffect, useState } from "react";
import { CardContainer} from "./BodyParts.styled";
import ExercisesSubcategoriesItem from "components/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import { useSelector } from "react-redux";

function BodyParts() {
  const state = useSelector(state => state)
  console.log('state', state)
         const [listExercises, setExercises] = useState([])
            useEffect(() => {
                const fetchExercisesBodyParts = async () => {
                  try {
                    const data = await getExercisesBodyParts()
                    setExercises(data.result)
                    
                  } catch (error) {
                    console.log(error)
                  }
                 
                }
                fetchExercisesBodyParts()
              },[]); 
              console.log(listExercises)
  return (
    <CardContainer>
    {listExercises.map(({ _id, filter, name, imgURL }) => (
    <ExercisesSubcategoriesItem key={_id} filter={filter} name={name} imgURL={imgURL}/>
    ))}
      
    </CardContainer>
  )
}

export default BodyParts