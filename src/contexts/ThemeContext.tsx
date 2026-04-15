import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./theme";

export const ThemeProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

