import { NavLink, useLocation } from "react-router-dom";
import {
  CardCategory,
  CardImg,
  CardName,
  CardText,
  CardsItems,
} from "./ExercisesSubcategoriesItem.styled";

function ExercisesSubcategoriesItem({ filter, name, imgURL }) {
  const location = useLocation();
  return (
    <>
      <NavLink to={name} state={{ from: location }}>
        <ul>
          <CardsItems>
            <CardImg src={imgURL} alt="exercises" />
            <CardText>
              <CardName>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </CardName>
              <CardCategory>{filter}</CardCategory>
            </CardText>
          </CardsItems>
        </ul>
      </NavLink>
    </>
  );
}

export default ExercisesSubcategoriesItem;
