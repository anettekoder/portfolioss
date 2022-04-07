import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

function Copyright() {
  return (
    <Typography variant="p" color="text.secondary" fontSize={13}>
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <StyledLink
            variant="button"
            color="text.primary"
            to="/"
            sx={{
              my: 1,
              mx: 1.5,
              textDecoration: "none",
              fontSize: "13px",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            Home
          </StyledLink>
          <StyledLink
            variant="button"
            color="text.primary"
            to="/about"
            sx={{
              my: 1,
              mx: 1.5,
              textDecoration: "none",
              fontSize: "13px",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            About
          </StyledLink>
          <StyledLink
            variant="button"
            color="text.primary"
            to="/projects"
            sx={{
              my: 1,
              mx: 1.5,
              textDecoration: "none",
              fontSize: "13px",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            Projects
          </StyledLink>
          <StyledLink
            variant="button"
            color="text.primary"
            to="/contact"
            sx={{
              my: 1,
              mx: 1.5,
              textDecoration: "none",
              fontSize: "13px",
              textTransform: "capitalize",
              fontWeight: "400",
            }}
          >
            Contact
          </StyledLink>
        </Container>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Footer;
