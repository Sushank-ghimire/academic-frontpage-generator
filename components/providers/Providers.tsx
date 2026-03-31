"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PdfxThemeProvider } from "@/lib/pdfx-theme-context";

interface ContextProvidersProps {
  children: React.ReactNode;
}

const ContextProviders: React.FC<ContextProvidersProps> = ({ children }) => {
  return (
    <PdfxThemeProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </NextThemesProvider>
    </PdfxThemeProvider>
  );
};

export default ContextProviders;
