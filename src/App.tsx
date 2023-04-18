import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import SelectorView from "./components/SelectorButtonGroup";
import { IntlProvider } from "react-intl";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondaryContrast};
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonMode = styled.button`
  background-color: ${(props) => props.theme.secondaryContrast};
  color: ${(props) => props.theme.primary};
  padding: 8px 16px;
  border-radius: 15px;
  font-weight: bold;
  width: 100px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.secondaryContrast};
    transform: scale(1.2);
    background-color: ${({ theme }) => theme.primaryContrast};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 3rem;
  @media (max-width: 900px) {
    margin: 1rem 0;
    justify-content: center;
  }
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
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
          <ButtonWrapper>
            <ButtonMode onClick={toggleDarkMode}>
              {isDarkMode ? "Modo claro" : "Modo oscuro"}
            </ButtonMode>
          </ButtonWrapper>
        </Header>
        <SelectorView
          isDarkMode={isDarkMode}
          darkTheme={darkTheme}
          lightTheme={lightTheme}
        />
        <Footer>
          <p>Ánimo! Me encantaría escucharte!</p>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
