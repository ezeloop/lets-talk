import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  theme: any;
};

const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 2rem;
  border-radius: 50px;
  height: 80vh;
  width: 80vw;
  overflow-y: auto;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
`;

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer isOpen={isOpen} onClick={onClose}>
        <ModalContent onClick={(event) => event.stopPropagation()}>
          {children}
          <button onClick={onClose}>Cerrar</button>
        </ModalContent>
      </ModalContainer>
    </ThemeProvider>
  );
};

export default Modal;
