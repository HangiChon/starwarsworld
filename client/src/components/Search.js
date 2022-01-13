import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import InfoCard from "./InfoCard";

// style
import styled from "styled-components";
import { ResponsiveCardContainer, BoldText } from "./ResponsiveComponents";

const Search = () => {
  const [query, setQuery] = useState(undefined);
  const [searchResult, isLoaded, , , , setRefetchRequired] = useFetch(
    `/api/people/search/?value=${query}`
  );

  // Note that we wouldn't need handleSubmit function in this approach as it fetches data on every change of input field
  // Since input field is still a form, button type for submit is given below that will prevent page refresh when pressed.
  const handleSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    setRefetchRequired(yes => !yes);
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={e => handleSubmit(e)}>
        <Input
          placeholder="Search for a person"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Button type="submit">
          <MagnifyingGlass src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" />
        </Button>
      </SearchForm>

      {isLoaded && searchResult.results.length > 0 && query.length !== 0 && (
        <>
          <ResponsiveCardContainer result>
            {searchResult.results.map((result, idx) => {
              return (
                <InfoCard
                  key={`person-${idx + 1}`}
                  info={result}
                  type="person"
                />
              );
            })}
          </ResponsiveCardContainer>
          <BoldText result>- End of Result -</BoldText>
        </>
      )}
    </>
  );
};

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto 30px;
  width: 250px;
  position: relative;
`;

const Input = styled.input`
  font-size: 15px;
  border: 1px solid black;
  border-radius: 50px;
  width: 100%;
  height: 40px;
  padding: 0 10px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
`;

const MagnifyingGlass = styled.img`
  width: 20px;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1560px;
  height: 50%;
  padding-bottom: 130px;
  margin: auto;
`;

export default Search;
