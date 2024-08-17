import { styled } from "@mui/material";

export const StyledHeader = styled("header")(({ theme }) => ({
  padding: "2rem 0",
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}));

export const StyledTitle = styled("h1")(({ theme }) => ({
  textAlign: "center",
  fontSize: "2.5rem",
  marginBottom: "1rem",
  lineHeight: "64px",
  color: theme.palette.text.secondary,
}));

export const StyledNav = styled("nav")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: "1rem 0",
  position: "sticky",
  top: "0",
  zIndex: "1000",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

export const StyledNavLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.3s ease",
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "0.5px",

  "&:hover": {
    color: theme.palette.accent.main,
  },
}));

export const StyledNavList = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyleType: "none",
  padding: "0",
  margin: "0",
  color: theme.palette.text.secondary,
}));

export const StyledSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
  border: `1px solid ${theme.palette.border.default}`,
}));

const baseHeadingStyles = ({ theme }) => ({
  marginTop: "2rem",
  color: theme.palette.secondary.main,
});

// Styled components for each heading
export const StyledH2 = styled("h2")(baseHeadingStyles);
export const StyledH3 = styled("h3")(baseHeadingStyles);
export const StyledH4 = styled("h4")(baseHeadingStyles);

export const StyledPreCode = styled("pre")(({ theme }) => ({
  fontFamily: "Fira Code, monospace",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "4px",
  padding: "1rem",
  overflowX: "auto",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  fontSize: "0.9rem",
  border: `1px solid ${theme.palette.border.default}`,
}));

export const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.accent.main,
  color: theme.palette.background.default,
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "600",
  transition: "backgroundColor 0.3s ease, transform 0.2s ease",
  marginTop: "1rem",

  "&:hover": {
    backgroundColor: "#0ea5e9",
    transform: "translateY(-2px)",
  },
}));

export const StyledApiDisplay = styled("div")(({ theme }) => ({
  marginTop: "1rem",
  padding: "1rem",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "4px",
  fontFamily: "Fira Code, monospace",
  border: `1px solid ${theme.palette.border.default}`,
  wordBreak: "break-all",
}));

export const StyledHttp = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.accent.main,
  color: theme.palette.background.default,
  padding: "0.25rem 0.5rem",
  borderRadius: "4px",
  fontWeight: "bold",
  marginRight: "0.5rem",
}));

export const StyledEndpoint = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  fontWeight: "bold",
  display: "inline-block",
  marginBottom: "1rem",
}));

export const StyledTable = styled("table")(({ theme }) => ({
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: "0",
  marginTop: "1rem",
  overflow: "hidden",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.border.default}`,
}));

export const StyledTh = styled("th")(({ theme }) => ({
  padding: "1rem",
  textAlign: "left",
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.primary.main,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  fontSize: "0.8rem",
  color: "#ffffff",
}));

export const StyledTd = styled("td")(({ theme }) => ({
  padding: "1rem",
  textAlign: "left",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
