import React from "react";
import useFetch from "../../hooks/useFetch";

// style
import styled from "styled-components";

const Home = () => {
  // fill the main page with the favourite SW quote found
  return (
    <MainWrapper>
      <QuoteWrapper>
        <Quote>"In my experience, there's no such thing as luck."</Quote>
        <QuoteBy>
          by Obi-Wan Kenobi <Italic>(A New Hope)</Italic>
        </QuoteBy>
      </QuoteWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  flex: 1 0 auto;
`;

const QuoteWrapper = styled.div`
  width: 1000px;
  height: 100px;
  position: absolute;
  left: calc(50% - 500px);
  top: calc(50% - 50px);
`;

const Quote = styled.p`
  font-size: 40px;
  font-weight: bolder;
`;

const QuoteBy = styled.p`
  font-size: 30px;
  text-align: right;
  line-height: 50px;
`;

const Italic = styled.span`
  font-size: 20px;
  font-style: italic;
`;

export default Home;
