import { getExercisesBodyParts } from "api/ApiExercises";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CardCategory, CardContainer, CardImg, CardName, CardText, CardsItems } from "./ExercisesSubcategoriesList.styled";


const ExercisesSubcategoriesList = () => {
            const [listExercises, setExercises] = useState([])
            useEffect(() => {
                const fetchExercisesBodyParts = async () => {
                  try {
                    const data = await getExercisesBodyParts()
                    setExercises(data)
                    
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
      <NavLink>
        <ul>
          <CardsItems key={_id}>
            <CardImg src={imgURL} alt="exercises" />
            <CardText>
              <CardName>{name}</CardName>
              <CardCategory>{filter}</CardCategory>
            </CardText>
          </CardsItems>
        </ul>
      </NavLink>))}
      
    </CardContainer>
    
      )
}
export default ExercisesSubcategoriesList