import { Container } from "components/styles/Container/Container";
import {
  CategoriesList,
  ContainerWrapper,
  LinkStyled,
  ListElement,
} from "./ExercisesPage.styled";
// import TitlePage from "components/TitlePage/TitlePage";
import { Outlet } from "react-router-dom/dist";
import TitlePage from "components/Exercises/Exercises/TitlePage/TitlePage";

function Exercises() {
  return (
    <Container>
      <ContainerWrapper>
        {/* <TitlePage>Exercises</TitlePage> */}
        <TitlePage />
        <CategoriesList>
          <ListElement>
            <LinkStyled to="body_parts">Body Parts</LinkStyled>
          </ListElement>
          <ListElement>
            <LinkStyled to="muscles">Muscles</LinkStyled>
          </ListElement>
          <ListElement>
            <LinkStyled to="equipment">Equipment</LinkStyled>
          </ListElement>
        </CategoriesList>
      </ContainerWrapper>
      <Outlet />
    </Container>
  );
}

export default Exercises;
