import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 428px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: white;
  background-color: ${({ theme }) => theme.secondaryContrast};
  transition: background-color 0.3s ease-in-out;
  display: inline-block;
  height: 120px;
  margin: 10px;
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    height: 80px;
  }

  @media (max-width: 428px) {
    font-size: 1rem;
    height: 100px;
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
        <div>
          <Title>Mensajes para comunicar necesidades diarias: </Title>
          <ButtonContainer>
            <SpeakButton text="Quiero Agua" onClick={() => {}} />
            <SpeakButton text="Necesito ir al baño" onClick={() => {}} />
            <SpeakButton text="Quiero comer" onClick={() => {}} />
            <SpeakButton text="Tengo frío" onClick={() => {}} />
            <SpeakButton text="Tengo calor" onClick={() => {}} />
            <SpeakButton text="Tengo Sueño" onClick={() => {}} />
            <SpeakButton text="Quiero salir" onClick={() => {}} />
          </ButtonContainer>
        </div>
      );
    case "socialNeeds":
      return (
        <div>
          <Title>
            Mensajes para conectarse con amigos, familiares y miembros de la
            comunidad:
          </Title>
          <ButtonContainer>
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
        </div>
      );
    case "jobNeeds":
      return (
        <div>
          <Title>
            Mensajes para el éxito en el trabajo y el lugar de trabajo:
          </Title>
          <ButtonContainer>
            <SpeakButton text="¿Puedo tener el día libre?" onClick={() => {}} />
            <SpeakButton
              text="Necesito ayuda con este trabajo"
              onClick={() => {}}
            />
            <SpeakButton
              text="¿Cuáles son mis tareas hoy?"
              onClick={() => {}}
            />
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
        </div>
      );

    case "emotionsNeeds":
      return (
        <div>
          <Title>Mensajes para expresar sentimientos y emociones:</Title>
          <ButtonContainer>
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
        </div>
      );
    default:
      return null;
  }
};

export default renderButtons;
