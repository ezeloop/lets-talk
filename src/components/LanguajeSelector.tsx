import React from "react";

interface LanguageSelectorProps {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  setLanguage,
}) => {
  return (
    <div>
      <button
        disabled={currentLanguage === "en"}
        onClick={() => setLanguage("en")}
      >
        English
      </button>
      <button
        disabled={currentLanguage === "es"}
        onClick={() => setLanguage("es")}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSelector;
