import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const LocationBox = styled.div`
  width: 100%;
  height: 20px;
  color: #ff6060;
  font-weight: bold;
  font-size: 1.2rem;
`;

function Location(location) {
  const { logementId } = useParams();
  const logement = data.find((log) => log.id === logementId);
  return <LocationBox key={location}>{logement.location}</LocationBox>;
}

export default Location;
