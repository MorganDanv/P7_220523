import React from "react";
import styled from "styled-components";
import FullStar from "../../assets/FullStar.svg";
import EmptyStar from "../../assets/EmptyStar.svg";

const RatingBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (min-width: 320px) and (max-width: 1200px) {
  }
`;

function Rating(props) {
  const fullStars = Array(5).fill(FullStar);
  const emptyStars = Array(5).fill(EmptyStar);
  return (
    <RatingBox>
      {fullStars.slice(5 - props.rate).map((FullStar, index) => {
        return <img key={"fullstar" + index} src={FullStar} alt="img" />;
      })}
      {emptyStars.slice(props.rate).map((EmptyStar, index) => {
        return <img key={"emptystar" + index} src={EmptyStar} alt="img" />;
      })}
    </RatingBox>
  );
}

export default Rating;
