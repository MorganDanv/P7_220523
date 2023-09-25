import React from "react";
import styled from "styled-components";

const HostBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const HostStyled = styled.div`
  color: #ff6060;
  font-weight: bold;
  font-size: 1.3rem;
  width: 100px;
  @media (min-width: 320px) and (max-width: 1200px) {
    width: 85px;
    font-size: 1rem;
  }
`;

const ScreenStyled = styled.img`
  height: 80px;
  object-fit: cover;
  border-radius: 100%;
  @media (min-width: 320px) and (max-width: 1200px) {
    height: 60px;
  }
`;

function Host(props) {
  return (
    <HostBox>
      <HostStyled>{props.hostname}</HostStyled>
      <ScreenStyled src={props.image} alt="img" />
    </HostBox>
  );
}

export default Host;
