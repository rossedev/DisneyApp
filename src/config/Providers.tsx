"use client";

import { ReactNode } from "react";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeContext";
import { CategoryProvider } from "@/context/CategoryContent";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
