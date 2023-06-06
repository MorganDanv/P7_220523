import React from "react";
import styled from "styled-components";
import BannerHome from "../../assets/BannerHome.png";
import data from "../../data.json";
import Cards from "../../components/Cards";

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
`;

const ThumbBox = styled.div`
  color: red;
`;

function Home() {
  return (
    <div>
      <BannerContainer>
        <BannerScreen src={BannerHome} />
      </BannerContainer>
      <ThumbWrapper>
        {data.map((Cards) => (
          <ThumbBox key={`${Cards.id}`}>{Cards.id}</ThumbBox>
        ))}
      </ThumbWrapper>
    </div>
  );
}

export default Home;
