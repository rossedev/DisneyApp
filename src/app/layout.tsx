import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/config/Providers";
import { ProtectedRoutes } from "@/app/hooks/ProtectedRoutes";
import LayoutTheme from "./themes/LayoutTheme";

export const metadata: Metadata = {
  title: "Disney App",
  description: "Disney app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <LayoutTheme>
          <ProtectedRoutes>           
            {children}
          </ProtectedRoutes>
        </LayoutTheme>
      </Providers>
    </html>
  );
}
