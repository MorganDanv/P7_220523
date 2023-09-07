import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  display: flex;
  padding: 15px;
  color: #ff7474;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  @media (min-width: 320px) and (max-width: 1200px) {
    padding: 0px;
    font-size: 15px;
    margin-left: 10px;
  }
`;

export const StyledText = styled.p`
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: #ff7474;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 22px;
    padding: 0px;
  }
`;
