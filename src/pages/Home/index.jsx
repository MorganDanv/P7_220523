import React from "react";
import styled from "styled-components";
import BannerHome from "../../assets/BannerHome.png";
import Card from "../../components/Cards";

const BannerContainer = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  @media (min-width: 320px) and (max-width: 1200px) {
    margin-top: 15px;
    margin-bottom: 20px;
  }
`;

const BannerScreen = styled.img`
  width: 100%;
  max-height: 223px;
  border-radius: 30px;
  object-fit: cover;
  @media (min-width: 320px) and (max-width: 1200px) {
    max-height: 100px;
    border-radius: 15px;
  }
`;

const BannerText = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;

  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const TextWrapperBanner = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;

function Home() {
  return (
    <div>
      <BannerContainer>
        <TextWrapperBanner>
          <BannerText>Chez vous, partout et ailleurs</BannerText>
        </TextWrapperBanner>
        <BannerScreen src={BannerHome} />
      </BannerContainer>
      <Card />
    </div>
  );
}

export default Home;
