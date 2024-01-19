import styled from 'styled-components';

export const ContainerWaist = styled.div`
  /* margin: 0 auto; */
`;
export const ContainerPage = styled.div`
  /* width: 335px;  */

  @media screen and (min-width: 768px) {
    max-height: 726px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 343px; // ????
    gap: 17px;
    justify-content: center;
    max-height: 487px;
    align-items: center;
    /* max-height: 487px;
    display: flex;
    align-items: center;

    justify-content: center;
    gap: 17px; */
  }
`;

export const ContainerWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  width: 335px;
  grid-template-columns: 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    /* margin: 0 auto; */
    grid-template-columns: 335px 335px;
    width: 702px;
    height: 750px;
    gap: 32px 16px;
    overflow-y: auto;
    overflow-x: hidden; /* Hide horizontal scrollbar */

    /* Scrollbar styling for webkit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 8px;
      margin: 10px; /* Add margin to the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--light-orange-color);
      border-radius: 12px;
      height: 153px; /* Adjust thumb height */
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(
        239,
        237,
        232,
        0.1
      ); /* Set scrollbar track color to gray */
    }

    /* Scrollbar styling for Firefox */
    scrollbar-width: thin;
    scrollbar-color: var(--light-orange-color) transparent;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 405px 405px;
    width: 848px;
    /* max-height: 500px; */
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    margin: 0;
    /* Scrollbar styling for webkit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
      width: 8px;
      margin: 10px; /* Add margin to the scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--light-orange-color);
      border-radius: 12px;
      height: 153px; /* Adjust thumb height */
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(
        239,
        237,
        232,
        0.1
      ); /* Set scrollbar track color to gray */
    }

    /* Scrollbar styling for Firefox */
    scrollbar-width: thin;
    scrollbar-color: var(--light-orange-color) transparent;
  }
`;

export const ImgWaist = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    /* display: block;
    width: 530px;
    height: 902px; */
    /* margin-top: -100px; */
    display: block;
    z-index: -100;
  }
`;
