import React from "react";
import styled from "styled-components";
import BannerHousing from "../../assets/BannerHousing.svg";
const BannerHousingContainer = styled.section`
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const BannerHousingScreen = styled.img`
  width: 100%;
  border-radius: 30px;
`;

function Housing() {
  return (
    <div>
      <BannerHousingContainer>
        <BannerHousingScreen src={BannerHousing} />
      </BannerHousingContainer>
    </div>
  );
}

export default Housing;
