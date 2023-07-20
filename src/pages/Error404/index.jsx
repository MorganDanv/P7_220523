import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledText } from "../../utils/styles/LinkStyle";
import ErrorScreen from "../../assets/ErrorScreen.svg";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  padding: 15px;
  color: #ff7474;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
`;

const IllustrationError = styled.img``;

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
