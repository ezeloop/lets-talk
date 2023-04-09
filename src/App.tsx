import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import SelectorView from "./components/SelectorButtonGroup";
import { IntlProvider } from "react-intl";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: center;
  height: 100%;
  flex-direction: column;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondaryContrast};
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const lightTheme = {
    backgroundColor: "#937DC2",
    textColor: "#FFE6F7",
    textTitleColor: "#937DC2",
    textButtonColor: "#36454F",
    primaryColor: "#FFE6F7",
    secondaryColor: "#AAC4FF",
    button: "#FFE5B4",
    hoverButton: "#FFD1A6",
    containerColor: "#FFABE1",
    circleColor: "#FFE6F7",
    circleColorText: "#363062",
    primary: "#FFB9B9",
    primaryContrast: "#FFDDD2",
    secondary: "#FFACC7",
    secondaryContrast: "#B83B5E",
  };

  const darkTheme = {
    backgroundColor: "#1C6758",
    textColor: "#395B64",
    primaryColor: "#2C3333",
    secondaryColor: "#A5C9CA",
    containerColor: "#395B64",
    circleColor: "#40513B",
    circleColorText: "black",
    primary: "#635985",
    primaryContrast: "#443C68",
    secondary: "#393053",
    secondaryContrast: "#18122B",
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <Header>
          <Logo>Selecciona los botones y hablemos!</Logo>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "Modo claro" : "Modo oscuro"}
          </button>
        </Header>
        <SelectorView
          isDarkMode={isDarkMode}
          darkTheme={darkTheme}
          lightTheme={lightTheme}
        />
        <Footer>
          <p>Animo! Me encantaria escucharte!</p>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
