"use client";
import * as React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useTheme } from "next-themes";
import Loader from "@/components/ui/Loader";

interface MuiThemeProviderProps {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({
  children,
}) => {
  const { theme: nextTheme } = useTheme();
  const [muiTheme, setMuiTheme] = React.useState(
    createTheme({ palette: { mode: "light" } })
  );
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const mode =
      nextTheme === "dark"
        ? "dark"
        : nextTheme === "light"
        ? "light"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    setMuiTheme(
      createTheme({
        palette: { mode },
        typography: { fontWeightBold: 900 },
      })
    );
  }, [nextTheme]);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
