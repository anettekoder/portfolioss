import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

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
          <Link
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
          </Link>
          <Link
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
          </Link>
          <Link
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
          </Link>
          <Link
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
          </Link>
        </Container>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Footer;
