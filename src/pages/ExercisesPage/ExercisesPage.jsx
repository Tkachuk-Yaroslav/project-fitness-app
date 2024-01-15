import ExercisesCategories from "components/ExercisesCategories/ExercisesCategories"
import ExercisesSubcategoriesList from "components/ExercisesSubcategoriesList/ExercisesSubcategoriesList"
import { Container } from "components/styles/Container/Container"
import { SectionExercises  } from "./ExercisesPage.styled"
import TitlePage from "components/TitlePage/TitlePage"

function Exercises() {
  return (
    <Container>
    <SectionExercises>
    <TitlePage>Exercises</TitlePage>
    {<ExercisesCategories/>}
    {<ExercisesSubcategoriesList/>}
    </SectionExercises>
    </Container>
  )
}

export default Exercises