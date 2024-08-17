import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3498db", // Primary color (a bright, calming blue)
    },
    secondary: {
      main: "#f1c40f", // Secondary color (a warm, inviting yellow)
    },
    background: {
      default: "#f7f7f7", // Background color (a clean, neutral gray)
      paper: "#ffffff", // Paper background color (pure white)
    },
    text: {
      primary: "#333333", // Dark text color for light mode (a deep, rich gray)
      secondary: "#666666", // Secondary text color (a medium, versatile gray)
    },
    border: {
      default: "#cccccc", // Border color (a light, subtle gray)
    },
    accent: {
      main: "#8bc34a", // Accent color (a fresh, energetic green)
    },
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1", // Primary color
    },
    secondary: {
      main: "#a5b4fc", // Secondary color
    },
    background: {
      default: "#0f172a", // Background color
      paper: "#1e293b", // Paper background color
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#FFFFFF",
    },
    border: {
      default: "#334155", // Border color
    },
    accent: {
      main: "#22d3ee", // Accent color
    },
  },
});

export { darkTheme, lightTheme };
