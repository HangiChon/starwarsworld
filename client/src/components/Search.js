import React from "react";

// style
import styled from "styled-components";

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <SearchForm onSubmit={e => handleSubmit(e)}>
      <Input placeholder="Search for a person" />
      <Button type="submit">
        <MagnifyingGlass src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" />
      </Button>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 30px auto;
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
export default Search;
