import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledText } from "../../utils/styles/LinkStyle";
import ErrorScreen from "../../assets/ErrorScreen.svg";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125px 0;
  @media (min-width: 320px) and (max-width: 1200px) {
    padding: 50px 0;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  padding: 15px;
  color: #ff7474;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 17px;
    padding-top: 180px;
  }
`;

const IllustrationError = styled.img`
  @media (min-width: 320px) and (max-width: 1200px) {
    height: 100px;
  }
`;

function Error() {
  return (
    <ScreenWrapper>
      <IllustrationError src={ErrorScreen} />
      <StyledText>
        Oups! La page que vous demandez n&apos;existe pas.
      </StyledText>

      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </ScreenWrapper>
  );
}

export default Error;
