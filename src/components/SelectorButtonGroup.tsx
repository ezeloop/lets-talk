import React, { useState } from "react";
import styled from "styled-components";
import renderButtons from "./ButtonGroup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  height: 100vh;
  background-color: #f5f5f5;
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

const Selector = styled.select`
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
  color: #333;
  width: 100%;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1),
      0 0 0 0.25rem rgba(0, 123, 255, 0.5);
  }

  appearance: none;
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='%23000000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l3 3 3-3z'/%3E%3C/svg%3E");
  background-position: right 0.7rem center;
  background-repeat: no-repeat;
  background-size: 1.2rem;
  padding-right: 2.5rem;

  @media (max-width: 368px) {
    margin-top: 60px;
  }
`;

const ContainerButtons = styled.div`
  @media (max-width: 368px) {
    height: 100%;
  }
`;

interface SelectorProps {
  options: string[];
  onSelect: (option: string) => void;
}

const SelectorView: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("easy");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Selector onChange={handleOptionChange}>
        <option value="">Quiero hablar de...</option>
        <option value="myself">mi</option>
        <option value="family">familia</option>
        <option value="friends">amigos</option>
        <option value="objetos">objetos</option>
      </Selector>
      <ContainerButtons>{renderButtons({ selectedOption })}</ContainerButtons>
    </Container>
  );
};

export default SelectorView;
