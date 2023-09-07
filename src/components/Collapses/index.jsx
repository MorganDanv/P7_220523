import React, { useState } from "react";
import styled from "styled-components";
import ArrowDown from "../../assets/ArrowDown.svg";
import ArrowUp from "../../assets/ArrowUp.svg";

const CollapseBox = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const DropDown = styled.div`
  height: 4rem;
  background-color: #ff6060;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  @media (min-width: 320px) and (max-width: 1200px) {
    height: 2rem;
  }
`;

const InfoBox = styled.div`
  background-color: #f6f6f6;
  display: flex;
  color: #ff6060;
  font-size: 18px;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 20px;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const ArrowDownStyled = styled.img`
  width: 4rem;
  height: 4rem;
`;

const ArrowUpStyled = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Collapse = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <CollapseBox>
        <DropDown onClick={() => setIsActive(!isActive)}>
          {title}
          {isActive ? (
            <ArrowDownStyled src={ArrowDown} />
          ) : (
            <ArrowUpStyled src={ArrowUp} />
          )}
        </DropDown>
        {isActive && <InfoBox>{children}</InfoBox>}
      </CollapseBox>
    </React.Fragment>
  );
};

export default Collapse;
