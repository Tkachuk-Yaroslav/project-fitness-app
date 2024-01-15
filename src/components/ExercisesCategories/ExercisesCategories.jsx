
import {  Outlet } from 'react-router-dom';
import { CategoriesStyled, LinkStyled, ListElement } from './ExercisesCategories.styled';



function ExercisesCategories() {
  return (
    <CategoriesStyled>
           <ListElement>
        <LinkStyled to="body_parts" >Body Parts</LinkStyled>
      </ListElement>
      <ListElement>
        <LinkStyled to="muscles">Muscles</LinkStyled>
      </ListElement>
      <ListElement>
        <LinkStyled to="equipment">Equipment</LinkStyled>
      </ListElement>
      <Outlet/>
      </CategoriesStyled>
  );
}

export default ExercisesCategories;
