// style
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// grid function for width
const getWidth = span => {
  if (!span) return;
  return `width: ${(span / 12) * 100}%;`;
};

// responsive components needed for infocard
const ResponsiveCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50%;
  margin: ${props => (props.result ? "0 auto 20px" : "0 auto 50px")};
`;

const ResponsiveWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: 75%;

  ${props => props.planets && "height: 330px;"}

  padding: 15px;
  margin: 0 5px 20px;
  float: left;

  @media only screen and (min-width: 500px) {
    ${({ xs }) => xs && getWidth(xs)};
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
  ${props => props.hamburger && "cursor: pointer;"}

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

// responsive nav items including hamburger menu activation and logo size
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

const ResponsiveLogo = styled.img`
  width: 150px;
  cursor: pointer;

  @media only screen and (min-width: 500px) {
    width: 170px;
  }

  @media only screen and (min-width: 769px) {
    width: 190px;
  }

  @media only screen and (min-width: 1200px) {
    width: 200px;
  }
`;

// responsive components for quote at "/"
const ResponsiveQuoteWrapper = styled.div`
  width: 80%;
  height: 20%;
  margin: 12% auto;

  @media only screen and (min-width: 500px) {
    width: 450px;
  }

  @media only screen and (min-width: 769px) {
    width: 710px;
  }

  @media only screen and (min-width: 992px) {
    width: 940px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1100px;
  }
`;

const ResponsiveQuote = styled.p`
  font-size: 1.5em;
  font-weight: bolder;

  @media only screen and (min-width: 500px) {
    font-size: 2em;
  }

  @media only screen and (min-width: 769px) {
    font-size: 2.1em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2.3em;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2.5em;
  }
`;

const ResponsiveQuoteBy = styled.p`
  font-size: 1em;
  text-align: right;
  line-height: 50px;

  @media only screen and (min-width: 500px) {
    font-size: 1.4em;
  }

  @media only screen and (min-width: 769px) {
    font-size: 1.6em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.8em;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 2.1rem;
  }
`;

const ResponsiveItalic = styled.span`
  font-size: 0.65em;
  font-style: italic;

  @media only screen and (min-width: 500px) {
    font-size: 0.7em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 0.75em;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 0.8em;
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
  ResponsiveHamburger,
  ResponsiveLogo,
  ResponsiveQuoteWrapper,
  ResponsiveQuote,
  ResponsiveQuoteBy,
  ResponsiveItalic
};
