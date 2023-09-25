import React from "react";
import styled from "styled-components";

const LocationBox = styled.div`
 
  color: #ff6060;
  font-weight: bold;
  font-size: 1.2rem;
  @media (min-width: 320px) and (max-width: 1200px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

function Location(props) {
  return <LocationBox>{props.location}</LocationBox>;
}

export default Location;
