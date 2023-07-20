import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../../utils/styles/LinkStyle";
import LogoKasa from "../../assets/LogoKasa.svg";

const HeaderContainer = styled.header`
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-top: 40px;
`;

const NavContainer = styled.nav`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
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
