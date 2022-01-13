import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import InfoCard from "../InfoCard";

// style
import styled from "styled-components";
import { ResponsiveCardContainer } from "../ResponsiveComponents";
import { CircularProgress } from "@material-ui/core";

const Starships = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [starshipsList, setStarshipsList] = useState([]);
  const [starshipsReady, setStarshipsReady] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [data, isLoaded, , , , setRefetchRequired] = useFetch(
    `/api/starships/?page=${pageNumber}`
  );

  useEffect(() => {
    if (isLoaded) {
      setStarshipsList([...data.results]);
      setStarshipsReady(true);
      setPageNumber(2);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (pageNumber > 2) {
      setStarshipsList([...starshipsList, ...data.results]);
    }

    if (pageNumber === 5) {
      setDisableBtn(true);
    }

    setRefetchRequired(yes => !yes);
  }, [pageNumber]);

  return (
    <MainWrapper>
      <Column>
        <ResponsiveCardContainer>
          {starshipsReady ? (
            starshipsList.map((starship, idx) => {
              return (
                <InfoCard
                  key={`person-${idx + 1}`}
                  info={starship}
                  type="starships"
                />
              );

              return <></>;
            })
          ) : (
            <CircularProgress />
          )}
        </ResponsiveCardContainer>

        {starshipsReady && (
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

export default Starships;
