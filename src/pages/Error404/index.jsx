import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink, StyledText } from "../../utils/styles/LinkStyle";
import ErrorScreen from "../../assets/ErrorScreen.svg";
import colors from "../../utils/styles/colors";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const IllustrationError = styled.img`
  max-width: 380px;
  background-color: ${colors.background};
`;

function Error() {
  return (
    <ScreenWrapper>
      <IllustrationError src={ErrorScreen} />
      <StyledText>
        Oups! La page que vous demandez n&apos;existe pas.
      </StyledText>
      <Link to="/"> </Link>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </ScreenWrapper>
  );
}

export default Error;
