import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import People from "./components/pages/People";
import Planets from "./components/pages/Planets";
import Starships from "./components/pages/Starships";

// style
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/people" element={<People />} />
          <Route exact path="/planets" element={<Planets />} />
          <Route exact path="/starships" element={<Starships />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
