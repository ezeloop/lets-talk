import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";

const LanguageSelector = () => {
  const intl = useIntl();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "es"
  );

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="es">{intl.formatMessage({ id: "espanol" })}</option>
        <option value="en">{intl.formatMessage({ id: "ingles" })}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
