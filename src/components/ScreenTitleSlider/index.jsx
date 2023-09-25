import React from "react";
import styled from "styled-components";

const TitleBox = styled.div`
  color: #ff6060;
  font-weight: bold;
  font-size: 1.7rem;
  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 1.8rem;
  }
`;

function SliderTitle(props) {
  return <TitleBox>{props.title}</TitleBox>;
}

export default SliderTitle;
