import React from "react";
import styled from "styled-components";
import FooterLogo from "../../assets/FooterLogo.svg";
import ReservedRights from "../../assets/ReservedRights.svg";

const FooterContainer = styled.footer`
  background-color: black;
`;
const LogoFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoFooter = styled.img`
  display: flex;
  width: 100px;
  height: 50px;
`;
const LogoRightsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoRights = styled.img`
  width: 300px;
  height: 50px;
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoFooterContainer>
        <LogoFooter src={FooterLogo} />
      </LogoFooterContainer>
      <LogoRightsContainer>
        <LogoRights src={ReservedRights} />
      </LogoRightsContainer>
    </FooterContainer>
  );
}

export default Footer;
