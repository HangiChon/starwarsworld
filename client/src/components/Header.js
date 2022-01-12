import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import styled from "styled-components";
import logo from "../images/logo.png";
import {
  ResponsiveNavItemsWrapper,
  ResponsiveNavItems,
  BoldText
} from "./ResponsiveComponents";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} onClick={() => navigate("/")} />
        <ResponsiveNavItemsWrapper>
          <div onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            <HamburgerMenu />
          </div>
          <ResponsiveNavItems to="/people">People</ResponsiveNavItems>
          <ResponsiveNavItems to="/planets">Planets</ResponsiveNavItems>
          <ResponsiveNavItems to="/starships">Starship</ResponsiveNavItems>
        </ResponsiveNavItemsWrapper>
      </HeaderWrapper>
      {hamburgerOpen && (
        <HamburgerMenuItems>
          <BoldText
            onClick={() => {
              navigate("/people");
              setHamburgerOpen(!hamburgerOpen);
            }}
            hamburger
          >
            People
          </BoldText>
          <BoldText
            onClick={() => {
              navigate("/planets");
              setHamburgerOpen(!hamburgerOpen);
            }}
            hamburger
          >
            Planets
          </BoldText>
          <BoldText
            onClick={() => {
              navigate("/starships");
              setHamburgerOpen(!hamburgerOpen);
            }}
            hamburger
          >
            Starships
          </BoldText>
        </HamburgerMenuItems>
      )}
    </>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  width: 100vw;
  height: 120px;
  padding: 10px;
  position: relative;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`;

const HamburgerMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #008cb4;
  opacity: 0.8;
  width: 200px;
  height: 250px;
  position: absolute;
  top: 100px;
  right: 10px;
  padding: 10px;
  z-index: 2;
`;

// const NavItemsWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 400px;
//   position: absolute;
//   left: calc(50% - 200px);
//   cursor: pointer;
// `;

// const NavItems = styled(NavLink)`
//   color: black;
//   font-family: "Lato", sans-serif;
//   font-size: 20px;
//   font-weight: bolder;
//   margin-left: 50px;
//   text-decoration: none;

//   &:first-child {
//     margin-left: 0;
//   }

//   &.active,
//   :hover {
//     color: #008cb4;
//     transition: 0.3s ease;
//   }
// `;

export default Header;
