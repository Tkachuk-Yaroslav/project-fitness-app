import styled from 'styled-components';

export const ExerciseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 8px;
  column-gap: 8px;
  padding-left: 2px;
  padding-right: 2px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 345px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ExerciseFormItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 147px;
  height: 62px;
  padding: 12px 18px;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 168px;
    height: 70px;
  }
`;

export const ExerciseFormSub = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(16/12);
  @media screen and (min-width: 768px) {
    line-height: calc(18/12);
  }
`;

export const ExerciseFormTitle = styled.p`
text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  color: rgb(239, 237, 232);
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24/16)
  }

  &:hover {
    overflow: visible;
  }
`;