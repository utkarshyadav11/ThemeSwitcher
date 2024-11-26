import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const defaultTheme = "light";
  const defaultCustomColors = { background: "#ffffff", text: "#000000" };

  // Manage theme state with persistence
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || defaultTheme
  );
  const [customColors, setCustomColors] = useState(
    () =>
      JSON.parse(localStorage.getItem("customColors")) || defaultCustomColors
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("customColors", JSON.stringify(customColors));
    Object.keys(customColors).forEach((key) => {
      document.documentElement.style.setProperty(`--${key}`, customColors[key]);
    });
  }, [customColors]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "light") {
      setCustomColors((prevColors) => ({
        ...prevColors,
        background: "#ffffff",
        text: "#000000",
      }));
    } else {
      setCustomColors((prevColors) => ({
        ...prevColors,
        background: "#000000",
        text: "#ffffff",
      }));
    }
  };
  const updateCustomColors = (colors) =>
    setCustomColors({ ...customColors, ...colors });

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, customColors, updateCustomColors }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
