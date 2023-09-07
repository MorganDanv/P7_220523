import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const HostBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const HostStyled = styled.div`
  color: #ff6060;
  font-weight: bold;
  font-size: 1.3rem;
  width: 100px;
`;

const ScreenStyled = styled.img`
  height: 80px;
  object-fit: cover;
  border-radius: 100%;
`;

function Host(name, picture) {
  const { logementId } = useParams();
  const logement = data.find((log) => log.id === logementId);
  return (
    <HostBox>
      <HostStyled key={logement.host}>{logement.host.name}</HostStyled>
      <ScreenStyled src={logement.host.picture} alt="img" />
    </HostBox>
  );
}

export default Host;
