import { ReactNode, createContext, useContext, useState } from "react";

export interface IThemeDefault {
  isLightMode: boolean;
}

interface IThemeContext {
  isLightMode: boolean;
  toggleTheme: (data: boolean) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = (data: boolean) => {
    setIsLightMode(data);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
