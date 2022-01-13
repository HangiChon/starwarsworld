import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Search from "../Search";
import InfoCard from "../InfoCard";

// style
import styled from "styled-components";
import { ResponsiveCardContainer } from "../ResponsiveComponents";
import { CircularProgress } from "@material-ui/core";

const People = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [peopleList, setPeopleList] = useState([]);
  const [peopleReady, setPeopleReady] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [data, isLoaded, , , , setRefetchRequired] = useFetch(
    `/api/people/?page=${pageNumber}`
  );

  // when data is received from backend, save it into local state variable to prepare render
  useEffect(() => {
    if (isLoaded) {
      setPeopleList([...data.results]);
      setPeopleReady(true);
      setPageNumber(2);
    }
  }, [isLoaded]);

  // accumulate received data in the state variable for rendering
  // set limit to load further
  useEffect(() => {
    if (pageNumber > 2) {
      setPeopleList([...peopleList, ...data.results]);
    }
    if (pageNumber === 10) {
      setDisableBtn(true);
    }

    setRefetchRequired(yes => !yes);
  }, [pageNumber]);

  return (
    <MainWrapper>
      <Column>
        <Search />
        <ResponsiveCardContainer>
          {peopleReady ? (
            peopleList.map((person, idx) => {
              return (
                <InfoCard
                  key={`person-${idx + 1}`}
                  info={person}
                  type="person"
                />
              );
            })
          ) : (
            <CircularProgress />
          )}
        </ResponsiveCardContainer>

        {peopleReady && (
          <ButtonWrapper>
            <Button
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={disableBtn}
            >
              Load More
            </Button>
          </ButtonWrapper>
        )}
      </Column>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  flex: 1 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid black;
  cursor: pointer;
  font-size: 15px;
  width: 100px;
  height: 30px;

  &:hover {
    color: white;
    background: black;
    transition: 0.3s ease all;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default People;
