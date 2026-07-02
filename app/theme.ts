import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f172a",
    },
    secondary: {
      main: "#0d9488",
    },
    background: {
      default: "#f4f1e8",
      paper: "#ffffff",
    },
    text: {
      primary: "#132235",
      secondary: "#334155",
    },
  },
  typography: {
    fontFamily: 'var(--font-body), "Segoe UI", sans-serif',
    h1: {
      fontFamily: 'var(--font-display), "Trebuchet MS", sans-serif',
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: 'var(--font-display), "Trebuchet MS", sans-serif',
      letterSpacing: "-0.03em",
    },
    h3: {
      fontFamily: 'var(--font-display), "Trebuchet MS", sans-serif',
      letterSpacing: "-0.03em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
