import { useState } from "react";

const ThemeBtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return <button onClick={toggleDarkMode}>{darkMode ? "LHT" : "DRK"}</button>;
};

export default ThemeBtn;
