import { getExercisesAllFilter } from 'api/ApiExercises';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CardCategory, CardContainer, CardImg, CardName, CardText, CardsItems } from './Equipment.styled';

function Equipment() {
  const filter = 'Equipment';
  const [ExercisesEquipment, setExercisesEquipment] = useState([])
                     useEffect(() => {
                const fetchExercisesEquipment = async () => {
                  try {
                    const data = await getExercisesAllFilter(filter)
                    setExercisesEquipment(data.result)
                    console.log('data', data)
                    
                  } catch (error) {
                    console.log(error)
                  }
                 
                }
                fetchExercisesEquipment()
              },[]); 
              
  return (
    <CardContainer>
    {ExercisesEquipment.map(({ _id, filter, name, imgURL }) => (
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

export default Equipment