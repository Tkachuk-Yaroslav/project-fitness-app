import { Container } from "components/styles/Container/Container";
import {
  CategoriesList,
  ContainerWrapper,
  LinkStyled,
  ListElement,
} from "./ExercisesPage.styled";
import TitlePage from "components/ExercisesMain/Exercises/TitlePage/TitlePage";
import { Outlet } from "react-router-dom/dist";
import WithDataRedirect from "HOC/HocRedirect";

function Exercises() {
  return (
    <Container>
      <ContainerWrapper>
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

const WrappedExercisesPage = WithDataRedirect(Exercises);
export default WrappedExercisesPage;

