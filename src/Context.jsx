import { useState, useContext, createContext, useEffect } from "react";

const GlobalCtx = createContext();

export const useAppCtx = () => useContext(GlobalCtx);

const prefersDarkTheme = () => {
  const userPreferredTheme = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const savedThemeMode = localStorage.getItem("darkMode");
  return savedThemeMode || userPreferredTheme;
};

const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(prefersDarkTheme());
  const [search, setSearch] = useState("cat");

  const toggleDarkTheme = () => {
    const toggleTheme = !darkTheme;
    setDarkTheme(toggleTheme);
    localStorage.setItem("darkMode", toggleTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);
  return (
    <GlobalCtx.Provider
      value={{ darkTheme, toggleDarkTheme, search, setSearch }}
    >
      {children}
    </GlobalCtx.Provider>
  );
};

export default AppProvider;
