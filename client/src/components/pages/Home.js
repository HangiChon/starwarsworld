import React from "react";

// style
import styled from "styled-components";
import {
  ResponsiveQuoteWrapper,
  ResponsiveQuote,
  ResponsiveQuoteBy,
  ResponsiveItalic
} from "../ResponsiveComponents";

const Home = () => {
  // fill the main page with the favourite SW quote found
  return (
    <MainWrapper>
      <ResponsiveQuoteWrapper>
        <ResponsiveQuote>
          "In my experience, there's no such thing as luck."
        </ResponsiveQuote>
        <ResponsiveQuoteBy>
          by Obi-Wan Kenobi <ResponsiveItalic>(A New Hope)</ResponsiveItalic>
        </ResponsiveQuoteBy>
      </ResponsiveQuoteWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  flex: 1 0 auto;
`;

export default Home;
