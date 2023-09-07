import React from "react";
import styled from "styled-components";
import BannerAbout from "../../assets/BannerAbout.svg";
import Collapse from "../../components/Collapses";
const BannerAboutContainer = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  @media (min-width: 320px) and (max-width: 1200px) {
    margin-top: 20px;
    margin-bottom: 2rem;
  }
`;

const BannerAboutScreen = styled.img`
  width: 100%;
  max-height: 223px;
  border-radius: 30px;
  object-fit: cover;
  @media (min-width: 320px) and (max-width: 1200px) {
    border-radius: 10px;
  }
`;

const CollapseContainer = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  margin-bottom: 50px;
  @media (min-width: 320px) and (max-width: 1200px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

function About() {
  return (
    <div>
      <BannerAboutContainer>
        <BannerAboutScreen src={BannerAbout} />
      </BannerAboutContainer>
      <CollapseContainer>
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect">
          {" "}
          La bienvaillance fait partie des valeurs fondatrice de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre platforme.
        </Collapse>
        <Collapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expèrience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Collapse>
        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </CollapseContainer>
    </div>
  );
}

export default About;
