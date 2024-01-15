import styled from "styled-components";
export const CardContainer = styled.div`
display: flex;
flex-flow: column wrap;
    gap: 20px;
    margin-top: 40px;
    align-items: center;
    @media screen and (min-width: 768px){
      flex-direction: row;
      gap: 16px;
    }
    @media screen and (min-width: 1440px){
        width: 1300px;
      }    
      
`
export const CardsItems = styled.li`
position: relative;
    width: 335px;
    height: 206px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    @media screen and (min-width: 768px) {
        width: 224px;
      }
      @media screen and (min-width: 1440px) {
        width: 237px;
      }
`

export const CardImg = styled.img`
width: 335px;
  height: 206px;
  opacity: 0.3;
  border-radius: 12px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`
export const CardText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  @media screen and (min-width: 768px) {
    width: 100%;
    
  }
`;

export const CardName = styled.p`

  margin-bottom: 2px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(239, 237, 232, 1);
  text-align: center;
  
`;

export const CardCategory = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.4);
  text-align: center;
`;