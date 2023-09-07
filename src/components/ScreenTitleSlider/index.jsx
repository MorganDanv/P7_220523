import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { useParams } from "react-router-dom";

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  color: #ff6060;
  font-weight: bold;
  font-size: 2.4rem;
`;

function SliderTitle(location) {
  const { logementId } = useParams();
  const logement = data.find((log) => log.id === logementId);
  return <TitleBox key={location}>{logement.title}</TitleBox>;
}

export default SliderTitle;
