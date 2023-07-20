import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BannerHome from "../../assets/BannerHome.png";
import data from "../../data.json";
// import Card from "../../components/Cards";

const BannerContainer = styled.section`
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const BannerScreen = styled.img`
  width: 100%;
  max-height: 223px;
  border-radius: 30px;
  object-fit: cover;
`;

const BannerText = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  font-weight: bold;
`;

const TextWrapperBanner = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: -100px;
`;

const ThumbWrapper = styled.section`
  background-color: #f6f6f6;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 340px;
  grid-column-gap: 85px;
  grid-row-gap: 85px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
`;

const ThumbBox = styled.div`
  width: 100%;
  cursor: pointer;
`;

const ThumbImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  height: 50px;
  position: absolute;
  padding-top: 250px;
`;

const TextThumb = styled.h1`
  font-size: 1rem;
  color: white;
  text-shadow: 2px 2px 1px rgb(0, 0, 0, 0.5);
`;

function Home() {
  let navigate = useNavigate();
  const routeChange = (idLogement) => {
    let path = `/housing/${idLogement}`;
    navigate(path);
  };
  return (
    <div>
      <BannerContainer>
        <TextWrapperBanner>
          <BannerText>Chez vous, partout et ailleurs</BannerText>
        </TextWrapperBanner>
        <BannerScreen src={BannerHome} />
      </BannerContainer>
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
    </div>
  );
}

export default Home;
