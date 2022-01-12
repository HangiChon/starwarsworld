import React from "react";

// style
import styled from "styled-components";

const InfoCard = ({ type, info }) => {
  console.log(type);

  // person card
  if (type === "person") {
    const { name, gender, birth_year, mass, height } = info;
    return (
      <Wrapper>
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
      </Wrapper>
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

      if (checkUnknown) {
        return "-";
      } else if (checkLow) {
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
      <Wrapper planets>
        <BoldText>{name}</BoldText>
        <div>
          <Title>Population</Title>
          <Text>{formatPopulation(populationSimple)}</Text>
        </div>
        <div>
          <Title>Climate</Title>
          <Text>{climate}</Text>
        </div>
        <div>
          <Title>Diameter</Title>
          <Text>{diameter} km</Text>
        </div>
        <div>
          <Title>Gravity</Title>
          <Text>{gravity}</Text>
        </div>
        <div>
          <Title>Terrain</Title>
          <Text>{terrain}</Text>
        </div>
      </Wrapper>
    );

    // starships card
  } else if (type === "starships") {
    return (
      <Wrapper>
        <BoldText>sdf</BoldText>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: 250px;
  height: ${props => props.planets && "330px"};
  padding: 15px;
  margin: 0 5px 10px;
`;

const Title = styled.p`
  color: lightgrey;
  font-size: 13px;
`;

const BoldText = styled.p`
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: black;
  font-size: 17px;
  margin-bottom: 10px;
`;

export default InfoCard;
