import React from "react";

// style
import styled from "styled-components";

const InfoCard = ({ person }) => {
  const { name, gender, birth_year, mass, height } = person;

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
};

const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  width: 250px;
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
