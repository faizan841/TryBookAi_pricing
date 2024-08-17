import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { darkTheme, lightTheme } from "./theme";
import Overview from "./components/Overview/Overview";
import Authentication from "./components/Authentication/Authentication";
import Endpoints from "./components/Endpoints/Endpoints";
import Tutorial from "./components/Tutorial/Tutorial";
import CodeExamples from "./components/CodeExamples/CodeExamples";
import ApiPricing from "./components/ApiPricing/ApiPricing";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar isDarkMode={isDarkMode} onThemeChange={handleThemeChange} />
        <Box
          sx={{ maxWidth: "1000px", margin: "2rem auto", padding: "0 2rem" }}
        >
          <Overview />
          <Authentication />
          <Endpoints />
          <Tutorial />
          <CodeExamples />
          <ApiPricing />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
