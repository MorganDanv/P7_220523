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
import Error from "../Error404/index";

const CollapseContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding-top: 20px;
  @media (min-width: 320px) and (max-width: 1200px) {
    display: block;
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  @media (min-width: 320px) and (max-width: 1200px) {
    display: block;
  }
`;

const RightContainer = styled.div`
  display: flex;

  flex-direction: column;
  @media (min-width: 320px) and (max-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContainerStyles = styled.div`
  position: relative;
  width: 100%;
  height: 415px;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media (min-width: 320px) and (max-width: 1200px) {
    padding-top: 1.5rem;
`;

function Housing() {
  const { logementId } = useParams();
  const logement = data.find((log) => log.id === logementId);

  if (!logement) {
    return <Error />;
  }

  return (
    <>
      <ContainerStyles>
        <Slider pictures={logement.pictures} />
      </ContainerStyles>
      <MainContainer>
        <LeftContainer>
          <SliderTitle title={logement.title}></SliderTitle>
          <Location location={logement.location}></Location>
          <Tags tags={logement.tags}></Tags>
        </LeftContainer>
        <RightContainer>
          <Host
            image={logement.host.picture}
            alt="img"
            hostname={logement.host.name}
          ></Host>
          <Rating rate={logement.rating}></Rating>
        </RightContainer>
      </MainContainer>
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
