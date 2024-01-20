import React from "react";
import { TitleDiv } from "./TitlePage.styled";
import { TitleH1Styled } from "components/TitlePage/TitlePage.styled";
import { useParams } from "react-router-dom";

const TitlePage = () => {
  // const location = useLocation();
  const { body_parts } = useParams();
  console.log("paramsbody_parts=", body_parts);
  const { equipmentId } = useParams();
  console.log("paramsequipmentId=", equipmentId);
  const { muscles } = useParams();
  console.log("paramsmuscles=", muscles);
  const capitalizedBodyParts = body_parts
    ? body_parts.slice(0, 1).toUpperCase() + body_parts.slice(1)
    : "";
  const capitalizedEquipmentId = equipmentId
    ? equipmentId.slice(0, 1).toUpperCase() + equipmentId.slice(1)
    : "";
  const capitalizedMuscles = muscles
    ? muscles.slice(0, 1).toUpperCase() + muscles.slice(1)
    : "";

  return (
    <>
      <TitleDiv>
        <TitleH1Styled>
          {capitalizedBodyParts ||
            capitalizedMuscles ||
            capitalizedEquipmentId ||
            "Exercises"}
        </TitleH1Styled>
      </TitleDiv>
    </>
  );
};

export default TitlePage;