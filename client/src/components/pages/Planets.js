import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import InfoCard from "../InfoCard";

// style
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const Planets = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [planetsList, setPlanetsList] = useState([]);
  const [planetsReady, setPlanetsReady] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [data, isLoaded, , , , setRefetchRequired] = useFetch(
    `/api/planets/?page=${pageNumber}`
  );

  useEffect(() => {
    if (isLoaded) {
      setPlanetsList([...data.results]);
      setPlanetsReady(true);
      setPageNumber(2);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (pageNumber > 2) {
      setPlanetsList([...planetsList, ...data.results]);
    }

    if (pageNumber === 7) {
      setDisableBtn(true);
    }

    setRefetchRequired(yes => !yes);
  }, [pageNumber]);

  return (
    <MainWrapper>
      <Column>
        <CardContainer>
          {planetsReady ? (
            planetsList.map((planet, idx) => {
              return (
                <InfoCard
                  key={`person-${idx + 1}`}
                  info={planet}
                  type="planets"
                />
              );

              return <></>;
            })
          ) : (
            <CircularProgress />
          )}
        </CardContainer>

        {planetsReady && (
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

export default Planets;
