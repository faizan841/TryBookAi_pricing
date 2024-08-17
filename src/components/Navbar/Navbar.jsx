import { IconButton } from "@mui/material";
import "./Navbar.css";
import React from "react";
import {
  StyledHeader,
  StyledNav,
  StyledNavLink,
  StyledNavList,
  StyledTitle,
} from "../../StyledComponents";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = ({ isDarkMode, onThemeChange }) => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>
          Book Generator API{" "}
          <span>
            <IconButton color="inherit" onClick={onThemeChange}>
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </span>{" "}
        </StyledTitle>
      </StyledHeader>
      <StyledNav>
        <StyledNavList>
          <li>
            <StyledNavLink href="#overview">Overview</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#authentication">Authentication</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#endpoints">Endpoints</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#tutorial">Tutorial</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#code-examples">Code Examples</StyledNavLink>
          </li>
          <li>
            <StyledNavLink href="#pricing">Pricing</StyledNavLink>
          </li>
        </StyledNavList>
      </StyledNav>
    </>
  );
};

export default Navbar;
