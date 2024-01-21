import {
    ExerciseFormItem,
    ExerciseFormSub,
    ExerciseFormTitle,
    ExerciseList,
  } from './ModalWaistList.styled';
  
  const ModalWaistList = ({ name, bodypart, target, equipment }) => {
    return (
      <ExerciseList>
        <ExerciseFormItem>
          <ExerciseFormSub>Name</ExerciseFormSub>
          <ExerciseFormTitle>{name}</ExerciseFormTitle>
        </ExerciseFormItem>
        <ExerciseFormItem>
          <ExerciseFormSub>Target</ExerciseFormSub>
          <ExerciseFormTitle>{target}</ExerciseFormTitle>
        </ExerciseFormItem>
        <ExerciseFormItem>
          <ExerciseFormSub>Body Part</ExerciseFormSub>
          <ExerciseFormTitle>{bodypart}</ExerciseFormTitle>
        </ExerciseFormItem>
        <ExerciseFormItem>
          <ExerciseFormSub>Equipment</ExerciseFormSub>
          <ExerciseFormTitle>{equipment}</ExerciseFormTitle>
        </ExerciseFormItem>
      </ExerciseList>
    );
  };
  
  export default ModalWaistList;