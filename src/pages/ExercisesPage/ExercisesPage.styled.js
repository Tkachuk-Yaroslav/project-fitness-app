import styled from "styled-components"
export const SectionExercises = styled.section`
display: flex;
flex-direction: column;

row-gap: 20px;
padding-top: 40px;

@media screen and (min-width: 768px){
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 72px;
  align-items: center;
}
`
