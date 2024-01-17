import { getExercisesAllFilter} from "api/ApiExercises";
import { useEffect, useState } from "react";
import { CardCategory, CardContainer, CardImg, CardName, CardText, CardsItems } from "./BodyParts.styled";
import { NavLink } from "react-router-dom/dist";

function BodyParts() {
  const filter = "Body parts"
         const [listExercises, setExercises] = useState([])
            useEffect(() => {
                const fetchExercisesBodyParts = async () => {
                  try {
                    const data = await getExercisesAllFilter(filter)
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
      <NavLink>
        <ul>
          <CardsItems key={_id}>
            <CardImg src={imgURL} alt="exercises" />
            <CardText>
            <CardName>{name.charAt(0).toUpperCase() + name.slice(1)}</CardName>
              <CardCategory>{filter}</CardCategory>
            </CardText>
          </CardsItems>
        </ul>
      </NavLink>))}
      
    </CardContainer>
  )
}

export default BodyParts