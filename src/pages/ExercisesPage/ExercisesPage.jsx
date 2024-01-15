import ExercisesSubcategoriesList from "components/ExercisesSubcategoriesList/ExercisesSubcategoriesList"
import { Container } from "components/styles/Container/Container"
import { CategoriesList, ContainerWrapper, LinkStyled, ListElement } from "./ExercisesPage.styled"
import TitlePage from "components/TitlePage/TitlePage"
import { Outlet } from "react-router-dom/dist"

function Exercises() {
  return (
    <Container>
    {/* <SectionExercises> */}
      <ContainerWrapper>
      <TitlePage>Exercises</TitlePage>
      <CategoriesList>
      <ListElement>
        <LinkStyled to="body_parts" >Body Parts</LinkStyled>
      </ListElement>
      <ListElement>
        <LinkStyled to="muscles">Muscles</LinkStyled>
      </ListElement>
      <ListElement>
        <LinkStyled to="equipment">Equipment</LinkStyled>
      </ListElement>
      </CategoriesList>
    
      </ContainerWrapper>
      <Outlet/>
    {/* {<ExercisesSubcategoriesList/>} */}
    {/* </SectionExercises> */}
    </Container>
  )
}

export default Exercises