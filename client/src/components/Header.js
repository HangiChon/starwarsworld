import React from "react";
import { NavLink } from "react-router-dom";

// style
import styled from "styled-components";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} />
      <NavItemsWrapper>
        <NavItems to="/people">People</NavItems>
        <NavItems to="/planets">Planets</NavItems>
        <NavItems to="/starships">Starship</NavItems>
      </NavItemsWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  height: 120px;
  margin: auto;
  padding: 10px;
  position: relative;
`;

const Logo = styled.img`
  width: 200px;
`;

const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  position: absolute;
  left: calc(50% - 200px);
  cursor: pointer;
`;

const NavItems = styled(NavLink)`
  color: black;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: bolder;
  margin-left: 50px;
  text-decoration: none;

  &:first-child {
    margin-left: 0;
  }

  &.active,
  :hover {
    color: #008cb4;
    transition: 0.3s ease;
  }
`;

export default Header;
