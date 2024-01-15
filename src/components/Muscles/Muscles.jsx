import { getExercisesMuscles } from 'api/ApiExercises';

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom/dist';
import { CardCategory, CardContainer, CardImg, CardName, CardText, CardsItems } from './Muscles.styled';

function Muscles() {
  const [MusclesExercises, setExercises] = useState([])
  useEffect(() => {
      const fetchExercisesMuscles = async () => {
        try {
          const data = await getExercisesMuscles()
          setExercises(data)
          
        } catch (error) {
          console.log(error)
        }
       
      }
      fetchExercisesMuscles()
    },[]); 
  return (
  
      <CardContainer>
      {MusclesExercises.map(({ _id, filter, name, imgURL }) => (
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


export default Muscles