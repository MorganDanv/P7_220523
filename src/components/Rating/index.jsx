import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import FullStar from "../../assets/FullStar.svg";
import EmptyStar from "../../assets/EmptyStar.svg";

const RatingBox = styled.div`
  display: flex;
  height: 40px;
`;

function Rating() {
  const { logementId } = useParams();
  const logement = data.find((log) => log.id === logementId);
  const fullStars = Array(5).fill(FullStar);
  const emptyStars = Array(5).fill(EmptyStar);
  return (
    <RatingBox>
      {fullStars.slice(5 - logement.rating).map((FullStar, index) => {
        return <img key={"fullstar" + index} src={FullStar} alt="img" />;
      })}
      {emptyStars.slice(logement.rating).map((EmptyStar, index) => {
        return <img key={"emptystar" + index} src={EmptyStar} alt="img" />;
      })}
    </RatingBox>
  );
}

export default Rating;
