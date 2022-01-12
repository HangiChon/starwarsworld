// style
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// grid function for width
const getWidth = span => {
  if (!span) return;
  return `width: ${(span / 12) * 100}%;`;
};

// components needed for infocard
const ResponsiveCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  height: 50%;
  margin: ${props => (props.result ? "0 auto 20px" : "0 auto 50px")};
`;

const ResponsiveWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: 75%;

  ${props => props.planets && "height: 330px;"}
  /* ${props => props.starships && "height: 330px;"} */
  padding: 15px;
  margin: 0 5px 20px;
  float: left;

  @media only screen and (min-width: 500px) {
    ${({ xs }) => xs && getWidth(xs)};
    /* ${({ starships }) => starships && "height: 400px;"} */
    margin: 0 15px 20px;
  }

  @media only screen and (min-width: 769px) {
    ${({ sm }) => sm && getWidth(sm)}
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidth(md)}
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)}
  }
`;

const Title = styled.p`
  color: lightgrey;
  font-size: 13px;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const BoldText = styled.p`
  font-weight: bolder;
  font-size: 20px;
  margin: ${props => (props.result ? "0 auto 50px" : "0 auto 10px")};
  ${props => props.result && "display: flex;"}

  @media only screen and (max-width: 768px) {
    font-size: 23px;
    ${props => props.hamburger && "color: white; text-decoration: underline;"}
  }
`;

const Text = styled.p`
  color: black;
  font-size: 17px;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: ${props => (props.planets || props.starships ? "18px" : "20px")};
  }
`;

// responsive nav items into hamburger menu
const ResponsiveNavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  position: absolute;
  left: calc(50% - 200px);
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    left: auto;
    right: 30px;
    height: 50px;
    width: auto;
    cursor: pointer;
  }
`;

const ResponsiveNavItems = styled(NavLink)`
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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ResponsiveHamburger = styled.div`
  background: black;
  width: 45px;
  height: 3px;
  margin: 6px 0;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export {
  ResponsiveCardContainer,
  ResponsiveWrapper,
  BoldText,
  Text,
  Title,
  ResponsiveNavItemsWrapper,
  ResponsiveNavItems,
  ResponsiveHamburger
};
