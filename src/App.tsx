import React, { useState } from "react";
import styled from "styled-components";
import SelectorView from "./components/SelectorButtonGroup";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: center;
  height: 100%;
  flex-direction: column;
  background: #8ab2ff;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const App: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const handleSelectDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
  };

  return (
    <AppContainer>
      <Header>
        <Logo>Selecciona los botones y hablemos!</Logo>
      </Header>
      <SelectorView />
      <Footer>
        <p>Animo! Me encantaria escucharte!</p>
      </Footer>
    </AppContainer>
  );
};

export default App;
