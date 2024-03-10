"use client";

import { useThemeContext } from "@/context/ThemeContext";

export default function LayoutTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeContext = useThemeContext();

  const dark = "";
  const light = "bg-gradient-light";
  
  return (
    <body
      className={`${
        themeContext?.isLightMode ? light : dark
      } text-gray-100 min-h-screen`}
    >
      {children}
    </body>
  );
}
