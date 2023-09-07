import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Collapse from "../../components/Collapses";
import styled from "styled-components";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";
import Location from "../../components/Location";
import Host from "../../components/Host";
import Slider from "../../components/Slider";
import SliderTitle from "../../components/ScreenTitleSlider";

const CollapseContainer = styled.div`
  width: 100%;
  height: 50rem;
  display: grid;
  grid-template-columns: 46% 46%;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 1200px) {
    display: block;
  }
`;

const TagsRatingContainer = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleHostContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;
const ContainerStyles = styled.div`
  width: 100%;
  height: 415px;
  margin: 0 auto;
`;
function Housing() {
  const { logementId } = useParams();
  const logement = data.find((log) => log.id === logementId);
  console.log(logement);

  return (
    <>
      <ContainerStyles>
        <Slider />
      </ContainerStyles>
      <TitleHostContainer>
        <SliderTitle>{logement.title}</SliderTitle>
        <Host src={logement.host.picture} alt="img">
          {logement.host.name}
        </Host>
      </TitleHostContainer>
      <Location>{logement.location}</Location>
      <TagsRatingContainer>
        <Tags>{logement.tags}</Tags>
        <Rating>{logement.rating}</Rating>
      </TagsRatingContainer>
      <CollapseContainer>
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Equipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </CollapseContainer>
    </>
  );
}

export default Housing;
