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
`;

export const StyledText = styled.p`
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: #ff7474;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
`;
