import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import logo from "../images/Logo-Anette.png";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1.5rem 0.75rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
`;

const MenuBar = () => {
  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{
          background: "none",
          card: "none",
          boxShadow: "none"
        }}
      >
        <Toolbar disableGutters style={{ display: "flex", flexDirection: "column" }}>
          <Typography noWrap sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <Link to="/">
              <img src={logo} alt="logo" style={{ width: "350px" }} />{" "}
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 2,
              paddingBottom: "5rem"
            }}
          >
            <StyledLink
              to="/"
              variant="button"
              color="text.primary"
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: "none"
              }}
            >
              Home
            </StyledLink>
<<<<<<< HEAD
            <StyledLink
              variant="button"
              color="text.primary"
              to="/about"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              About
            </StyledLink>
            <StyledLink
              variant="button"
              color="text.primary"
              to="/projects"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Projects
            </StyledLink>
            <StyledLink
              variant="button"
              color="text.primary"
=======
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink
              variant="button"
              color="text.primary"
>>>>>>> 5c9b48e21c15e7590e52e45365d84da0a2719eb2
              to="/contact"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Contact
            </StyledLink>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default MenuBar;
