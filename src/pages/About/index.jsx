import React from "react";
import styled from "styled-components";
import BannerAbout from "../../assets/BannerAbout.svg";

const BannerAboutContainer = styled.section`
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const BannerAboutScreen = styled.img`
  width: 100%;
  max-height: 223px;
  border-radius: 30px;
  object-fit: cover;
`;

function About() {
  return (
    <div>
      <BannerAboutContainer>
        <BannerAboutScreen src={BannerAbout} />
      </BannerAboutContainer>
    </div>
  );
}

export default About;
