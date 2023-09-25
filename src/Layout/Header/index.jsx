import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../../utils/styles/LinkStyle";
import LogoKasa from "../../assets/LogoKasa.svg";

const HeaderContainer = styled.header`
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: 320px) and (max-width: 1200px) {
    padding-top: 15px;
    padding-bottom: 0px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 1200px) {
    height: 40px;
  }
`;

const IllustrationLogo = styled.img``;

const LinkContainer = styled.div`
  display: flex;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <IllustrationLogo src={LogoKasa} />
        </LogoContainer>
        <LinkContainer>
          <NavLink to="/"> </NavLink>
          <StyledLink to="/">Accueil</StyledLink>
          <NavLink to="/about"> </NavLink>
          <StyledLink to="/about">A Propos</StyledLink>
        </LinkContainer>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
