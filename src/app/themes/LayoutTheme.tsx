"use client";

import { useThemeContext } from "@/context/ThemeContext";

export default function LayoutTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeContext = useThemeContext();

  const dark = "text-white-200 ";
  const light = "bg-gradient-light text-gray-800 ";
  
  return (
    <body
      className={`${themeContext?.isLightMode ? light : dark} min-h-screen`}
    >
      {children}
    </body>
  );
}
