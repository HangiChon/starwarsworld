import React, { useEffect } from "react";
import useFecth from "../../hooks/useFetch";
import Search from "../Search";
import PersonCard from "../PersonCard";

// style
import styled from "styled-components";

const People = () => {
  return (
    <>
      <Search />
      <PersonCard />
    </>
  );
};

export default People;
