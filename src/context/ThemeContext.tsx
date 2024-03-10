import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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

  useEffect(() => {
    if (localStorage.getItem("categories")) {
      const themeSaved = Boolean(localStorage.getItem("theme") || "");
      setIsLightMode(themeSaved);
    }
  }, []);

  const toggleTheme = (data: boolean) => {
    setIsLightMode(data);
    localStorage.setItem("theme", data.toString());
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
