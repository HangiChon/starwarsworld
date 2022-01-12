import React from "react";

// style
import styled from "styled-components";
import {
  ResponsiveWrapper,
  BoldText,
  Text,
  Title
} from "./ResponsiveComponents";

const InfoCard = ({ type, info, isForResult }) => {
  console.log(type);

  // person card
  if (type === "person") {
    const { name, gender, birth_year, mass, height } = info;
    return (
      <ResponsiveWrapper xs="4" sm="3" md="2.5" lg="2">
        <BoldText>{name}</BoldText>
        <div>
          <Title>Gender</Title>
          <Text>{gender}</Text>
        </div>
        <div>
          <Title>Birth Year</Title>
          <Text>{birth_year}</Text>
        </div>
        <div>
          <Title>Physical</Title>{" "}
          <Text>
            {mass !== "unknown" ? mass + " kg / " : "- kg / "}
            {height !== "unknown" ? height + " cm" : "- cm"}
          </Text>
        </div>
      </ResponsiveWrapper>
    );

    // planet card
  } else if (type === "planets") {
    const { name, population, climate, diameter, gravity, terrain } = info;
    let populationSimple = population;

    // format all the zeros into units
    const formatPopulation = population => {
      const populationLength = population.split("").length;
      const checkUnknown = population === "unknown";
      const checkLow = populationLength <= 6 && population.includes("0");
      const checkMil = populationLength >= 7 && populationLength <= 9;
      const checkBil = populationLength >= 10 && populationLength <= 12;
      const checkTril = populationLength >= 13;
      let cut;
      let unit;

      checkMil && (cut = 6) && (unit = " million(s)");
      checkBil && (cut = 9) && (unit = " billion(s)");
      checkTril && (cut = 12) && (unit = " trillion(s)");

      if (checkUnknown || checkLow) {
        return population;
      } else {
        return population
          .split("")
          .reverse()
          .splice(cut, populationLength)
          .reverse()
          .join("")
          .concat(unit);
      }
    };

    return (
      <ResponsiveWrapper xs="5" sm="3.5" md="2.5" lg="2" planets>
        <BoldText>{name}</BoldText>
        <div>
          <Title>Population</Title>
          <Text planets>{formatPopulation(populationSimple)}</Text>
        </div>
        <div>
          <Title>Climate</Title>
          <Text planets>{climate}</Text>
        </div>
        <div>
          <Title>Diameter</Title>
          <Text planets>{diameter} km</Text>
        </div>
        <div>
          <Title>Gravity</Title>
          <Text planets>{gravity}</Text>
        </div>
        <div>
          <Title>Terrain</Title>
          <Text planets>{terrain}</Text>
        </div>
      </ResponsiveWrapper>
    );

    // starships card
  } else if (type === "starships") {
    const { name, model, manufacturer, crew, passengers, MGLT } = info;
    return (
      <ResponsiveWrapper xs="5" sm="3.5" starships>
        <BoldText>{name}</BoldText>
        <div>
          <Title>Model</Title>
          <Text starships>{model}</Text>
        </div>
        <div>
          <Title>Made by</Title>
          <Text starships>{manufacturer}</Text>
        </div>
        <div>
          <Title>Crew / Passengers</Title>
          <Text starships>
            {crew} / {passengers}
          </Text>
        </div>
        <div>
          <Title>Speed (megalight/hour)</Title>
          <Text starships>{MGLT}</Text>
        </div>
      </ResponsiveWrapper>
    );
  }
};

const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: 250px;
  ${props => props.planets && "height: 330px;"}
  ${props => props.starships && "height: 340px;"}
  padding: 15px;
  margin: 0 5px 10px;
`;

// const Title = styled.p`
//   color: lightgrey;
//   font-size: 13px;
// `;

// const BoldText = styled.p`
//   font-weight: bolder;
//   font-size: 20px;
//   margin-bottom: 10px;
// `;

// const Text = styled.p`
//   color: black;
//   font-size: 17px;
//   margin-bottom: 10px;
// `;

export default InfoCard;
