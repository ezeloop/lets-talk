import React, { useState } from "react";
import styled, { ThemeProvider, withTheme } from "styled-components";
import renderButtons from "./ButtonGroup";
import Modal from "./Modal";
import { MdInsertEmoticon, MdWork } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryContrast};
  border-radius: 50px;
  padding: 1rem;
  overflow-y: auto;
  /* Estilos de la scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #231a31;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  weight: bold;
  color: ${({ theme }) => theme.secondaryContrast};
  @media (max-width: 368px) {
    display: grid;
    grid-template-columns: auto;
    margin-top: 3rem;
  }
`;

const Circle = withTheme(styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  }

  .circle-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: 368px) {
      font-size: 1.5rem;
    }
  }

  .circle-name {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    @media (max-width: 368px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 368px) {
    width: 140px;
    height: 140px;
  }
`);

const ContainerButtons = styled.div`
  @media (max-width: 368px) {
    height: 100%;
  }
`;

interface SelectorProps {
  isDarkMode: boolean;
  lightTheme: any;
  darkTheme: any;
}

const SelectorView: React.FC<SelectorProps> = ({
  lightTheme,
  isDarkMode,
  darkTheme,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("easy");
  const [showModal, setShowModal] = useState(false);

  console.log(isDarkMode);

  const handleCircleClick = (option: string) => {
    setShowModal(true);
    setSelectedOption(option);
  };

  const CircleContent = ({
    name,
    icon,
  }: {
    name: string;
    icon: React.ReactNode;
  }) => (
    <Circle>
      <div className="circle-icon">{icon}</div>
      <div className="circle-name">{name}</div>
    </Circle>
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <CircleContainer>
          <Circle onClick={() => handleCircleClick("basicNeeds")}>
            <CircleContent icon={<MdInsertEmoticon />} name={"Básicas"} />
          </Circle>
          <Circle onClick={() => handleCircleClick("socialNeeds")}>
            <CircleContent icon={<GiThreeFriends />} name={"Sociales"} />
          </Circle>
          <Circle onClick={() => handleCircleClick("emotionsNeeds")}>
            <CircleContent icon={<AiFillHeart />} name={"Emociones"} />
          </Circle>
          <Circle onClick={() => handleCircleClick("jobNeeds")}>
            <CircleContent icon={<MdWork />} name={"Trabajo"} />
          </Circle>
        </CircleContainer>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(!showModal)}
            theme={isDarkMode ? darkTheme : lightTheme}
          >
            <ContainerButtons>
              {renderButtons({ selectedOption })}
            </ContainerButtons>
          </Modal>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default SelectorView;
