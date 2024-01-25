import React from 'react';
import { TitleDiv } from './TitlePage.styled';
import { TitleH1Styled } from 'components/TitlePage/TitlePage.styled';
import { useParams } from 'react-router-dom';

const TitlePage = () => {
  const { body_parts } = useParams();
  const { equipmentId } = useParams();
  const { muscles } = useParams();
  const capitalizedBodyParts = body_parts
    ? body_parts.slice(0, 1).toUpperCase() + body_parts.slice(1)
    : '';
  const capitalizedEquipmentId = equipmentId
    ? equipmentId.slice(0, 1).toUpperCase() + equipmentId.slice(1)
    : '';
  const capitalizedMuscles = muscles
    ? muscles.slice(0, 1).toUpperCase() + muscles.slice(1)
    : '';

  return (
    <>
      <TitleDiv>
        <TitleH1Styled>
          {capitalizedBodyParts ||
            capitalizedMuscles ||
            capitalizedEquipmentId ||
            'Exercises'}
        </TitleH1Styled>
      </TitleDiv>
    </>
  );
};

export default TitlePage;
