import React, { useState } from "react";
import styled from "styled-components";
import ArrowDown from "../../assets/ArrowDown.png";
import ArrowUp from "../../assets/ArrowUp.png";

const AccordionsContainer = styled.div`
  width: 100%;
  height: 50rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 340px;
  grid-column-gap: 80px;
  grid-row-gap: 40px;
`;

const AccordionsBox = styled.div`
  width: 100%;
  height: 300px;
`;

const DropDown = styled.div`
  height: 3rem;
  background-color: red;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f6f6f6;
`;

const ArrowDownStyled = styled.img`
  width: 25px;
  height: 25px;
`;

const ArrowUpStyled = styled.img`
  width: 25px;
  height: 25px;
`;

const Accordions = ({ logement }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <AccordionsContainer>
        <AccordionsBox>
          <DropDown onClick={() => setIsActive(!isActive)}>
            Description
            {isActive ? (
              <ArrowDownStyled src={ArrowDown} />
            ) : (
              <ArrowUpStyled src={ArrowUp} />
            )}
          </DropDown>
          {isActive && <InfoBox>{logement}</InfoBox>}
          <InfoBox>{logement}</InfoBox>
          <DropDown onClick={() => setIsActive(!isActive)}>
            Équipements
            {isActive ? (
              <ArrowDownStyled src={ArrowDown} />
            ) : (
              <ArrowUpStyled src={ArrowUp} />
            )}
          </DropDown>
          {isActive && <InfoBox>{logement}</InfoBox>}
          <InfoBox>{logement}</InfoBox>
        </AccordionsBox>
      </AccordionsContainer>
    </React.Fragment>
  );
};

export default Accordions;
