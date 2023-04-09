import React from "react";
import styled from "styled-components";

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
  background-color: ${({ theme }) => theme.secondaryContrast};
  transition: background-color 0.3s ease-in-out;
  display: inline-block;
  height: 80px;
  margin: 10px;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
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
    case "basicNeeds":
      return (
        <ButtonContainer>
          <p>mensajes para comunicar necesidades diarias: </p>
          <SpeakButton text="Quiero Agua" onClick={() => {}} />
          <SpeakButton text="Necesito ir al baño" onClick={() => {}} />
          <SpeakButton text="Quiero comer" onClick={() => {}} />
          <SpeakButton text="Tengo frío" onClick={() => {}} />
          <SpeakButton text="Tengo calor" onClick={() => {}} />
          <SpeakButton text="Tengo Sueño" onClick={() => {}} />
          <SpeakButton text="Quiero salir" onClick={() => {}} />
        </ButtonContainer>
      );
    case "socialNeeds":
      return (
        <ButtonContainer>
          <p>
            mensajes para conectarse con amigos, familiares y miembros de la
            comunidad.
          </p>
          <SpeakButton text="Hola, ¿cómo estás?" onClick={() => {}} />
          <SpeakButton text="¿cómo es tú nombre?" onClick={() => {}} />
          <SpeakButton text="¿Quieres salir conmigo?" onClick={() => {}} />
          <SpeakButton
            text="¿Te gustaría ver una película juntos?"
            onClick={() => {}}
          />
          <SpeakButton text="¿Cómo estuvo tu día?" onClick={() => {}} />
          <SpeakButton text="Me encanta hablar contigo" onClick={() => {}} />
          <SpeakButton text="Eres un gran amigo/a" onClick={() => {}} />
          <SpeakButton text="¿Cómo está mi mascota?" onClick={() => {}} />
        </ButtonContainer>
      );
    case "jobNeeds":
      return (
        <ButtonContainer>
          <p>mensajes para el éxito en el trabajo y el lugar de trabajo.</p>
          <SpeakButton text="¿Puedo tener el día libre?" onClick={() => {}} />
          <SpeakButton
            text="Necesito ayuda con este trabajo"
            onClick={() => {}}
          />
          <SpeakButton text="¿Cuáles son mis tareas hoy?" onClick={() => {}} />
          <SpeakButton
            text="¿Puedo hablar contigo sobre mi rendimiento?"
            onClick={() => {}}
          />
          <SpeakButton
            text="¿Qué puedo hacer para mejorar?"
            onClick={() => {}}
          />
          <SpeakButton
            text="¿Hay algún problema con mi trabajo?"
            onClick={() => {}}
          />
          <SpeakButton
            text="Gracias por la oportunidad de trabajo"
            onClick={() => {}}
          />
        </ButtonContainer>
      );

    case "emotionsNeeds":
      return (
        <ButtonContainer>
          <p>Mensajes para expresar sentimientos y emociones.</p>
          <SpeakButton text="Me siento feliz" onClick={() => {}} />
          <SpeakButton text="Estoy triste" onClick={() => {}} />
          <SpeakButton text="Tengo miedo" onClick={() => {}} />
          <SpeakButton text="Me siento solo" onClick={() => {}} />
          <SpeakButton text="Me gusta estar contigo" onClick={() => {}} />
          <SpeakButton text="Te quiero" onClick={() => {}} />
          <SpeakButton text="Quiero una cerveza" onClick={() => {}} />
          <SpeakButton text="Estoy enojado" onClick={() => {}} />
          <SpeakButton text="Quiero mi comida favorita" onClick={() => {}} />
        </ButtonContainer>
      );
    default:
      return null;
  }
};

export default renderButtons;
