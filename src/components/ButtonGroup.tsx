import React from "react";
import styled from "styled-components";

//primary #231A31
//sec #E42F45
//ter #B42B3F
//4 #8AB2FF

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 2rem;
  color: white;
  background-color: #231a31;
  transition: background-color 0.3s ease-in-out;
  display: inline-block;
  height: 80px;
  margin: 10px;
  overflow: hidden;
  &:hover {
    background-color: #e42f45;
  }
  @media (max-width: 368px) {
    font-size: 1rem;
    height: 60px;
  }
`;

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const findFemaleVoice = (voices: SpeechSynthesisVoice[]) => {
  return voices.find((voice) => {
    return (
      voice.voiceURI.includes("femenino") || voice.voiceURI.includes("female")
    );
  });
};

const SpeakButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  const handleClick = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const femaleVoice = findFemaleVoice(window.speechSynthesis.getVoices());
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    window.speechSynthesis.speak(utterance);
    onClick();
  };

  return <Button onClick={handleClick}>{text}</Button>;
};

const renderButtons = ({ selectedOption }: { selectedOption: string }) => {
  switch (selectedOption) {
    case "confirmar":
      return (
        <ButtonContainer>
          <SpeakButton text="Si" onClick={() => {}} />
          <SpeakButton text="No" onClick={() => {}} />
          <SpeakButton text="Quizas" onClick={() => {}} />
          <SpeakButton text="Siempre" onClick={() => {}} />
          <SpeakButton text="Solo por hoy" onClick={() => {}} />
          <SpeakButton text="Jamas" onClick={() => {}} />
          <SpeakButton text="estas loco/a?" onClick={() => {}} />
        </ButtonContainer>
      );
    case "myself":
      return (
        <ButtonContainer>
          <SpeakButton text="Estoy Feliz" onClick={() => {}} />
          <SpeakButton text="Estoy Triste" onClick={() => {}} />
          <SpeakButton text="Estoy Enojado" onClick={() => {}} />
          <SpeakButton text="Tengo Hambre" onClick={() => {}} />
          <SpeakButton text="Tengo Sed" onClick={() => {}} />
          <SpeakButton text="Tengo Sueño" onClick={() => {}} />
          <SpeakButton text="Necesito la enfermera" onClick={() => {}} />
          <SpeakButton text="Gracias" onClick={() => {}} />
          <SpeakButton text="Tengo Sueño" onClick={() => {}} />{" "}
          <SpeakButton text="Tengo dolor" onClick={() => {}} />
          <SpeakButton
            text="Quiero estar solo en este momento"
            onClick={() => {}}
          />
          <SpeakButton text="Te Quiero" onClick={() => {}} />
          <SpeakButton text="Te Amo" onClick={() => {}} />
        </ButtonContainer>
      );
    case "family":
      return (
        <ButtonContainer>
          <SpeakButton text="Quiero ver a mi hijo" onClick={() => {}} />
          <SpeakButton text="Quiero ver a mi hija" onClick={() => {}} />
          <SpeakButton text="Quiero ver a mi madre" onClick={() => {}} />
          <SpeakButton text="Quiero ver a mi Padre" onClick={() => {}} />
          <SpeakButton text="Quiero ver a mi Hermano" onClick={() => {}} />
          <SpeakButton text="Quiero ver a mi Hermana" onClick={() => {}} />
          <SpeakButton text="Quiero ver a mi pareja" onClick={() => {}} />
          <SpeakButton
            text="Quiero saber sobre mi mascota"
            onClick={() => {}}
          />
        </ButtonContainer>
      );
    case "friends":
      return (
        <ButtonContainer>
          <SpeakButton text="Quiero ver a mi amigo" onClick={() => {}} />
          <SpeakButton text="Quiero ver a mi amiga" onClick={() => {}} />
          <SpeakButton text="Como te sientes amigo/a mia?" onClick={() => {}} />
          <SpeakButton text="Como estan tus hijos?" onClick={() => {}} />
          <SpeakButton text="Como esta tu pareja?" onClick={() => {}} />
          <SpeakButton text="Como esta tu trabajo?" onClick={() => {}} />
          <SpeakButton text="Has ido a mi casa?" onClick={() => {}} />
          <SpeakButton
            text="Dile a mi pareja que estoy bien"
            onClick={() => {}}
          />
          <SpeakButton
            text="Dile a mi familia que estoy bien"
            onClick={() => {}}
          />
        </ButtonContainer>
      );

    case "objetos":
      return (
        <ButtonContainer>
          <SpeakButton text="Quiero mi celular" onClick={() => {}} />
          <SpeakButton text="Quiero mi computadora" onClick={() => {}} />
          <SpeakButton text="Quiero un libro " onClick={() => {}} />
          <SpeakButton text="Quiero un abrigo" onClick={() => {}} />
          <SpeakButton
            text="Quiero escuchar mi musica favorita"
            onClick={() => {}}
          />
          <SpeakButton text="Quiero ver una pelicula" onClick={() => {}} />
          <SpeakButton text="Quiero ver una cerveza" onClick={() => {}} />
          <SpeakButton text="Quiero ver un vino" onClick={() => {}} />
          <SpeakButton text="Quiero mi comida favorita" onClick={() => {}} />
        </ButtonContainer>
      );
    default:
      return null;
  }
};

export default renderButtons;
