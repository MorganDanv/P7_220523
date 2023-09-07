import React from "react";
import data from "../../data.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ThumbWrapper = styled.section`
  background-color: #f6f6f6;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  margin-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: 320px) and (max-width: 1200px) {
    display: block;
    padding-bottom: 15px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: white;
    padding-top: 0px;
  }
`;

const ThumbBox = styled.div`
  cursor: pointer;
  position: relative;
  @media (min-width: 320px) and (max-width: 1200px) {
    padding-bottom: 20px;
  }
`;

const ThumbImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  top: 15rem;
  left: 1.5rem;
  right: 1.5rem;
`;

const TextThumb = styled.h1`
  font-size: 1rem;
  color: white;
  text-shadow: 2px 2px 1px rgb(0, 0, 0, 0.5);
`;

function Card() {
  let navigate = useNavigate();
  const routeChange = (idLogement) => {
    let path = `/housing/${idLogement}`;
    navigate(path);
  };

  return (
    <ThumbWrapper>
      {data.map((data) => (
        <ThumbBox
          onClick={() => {
            routeChange(data.id);
          }}
          key={`${data.id}`}
        >
          <TextWrapper>
            <TextThumb>{data.title}</TextThumb>
          </TextWrapper>
          <ThumbImg src={data.cover} alt="img" />
        </ThumbBox>
      ))}
    </ThumbWrapper>
  );
}

export default Card;
