import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import logo from "../images/Logo-Anette.png";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const MenuBar = () => {
  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{
          background: "none",
          card: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar
          disableGutters
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography noWrap sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <Link href="/">
              <img src={logo} alt="logo" style={{ width: "350px" }} />{" "}
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 2,
              paddingBottom: "5rem",
            }}
          >
            <Link
              variant="button"
              color="text.primary"
              to="/"
              sx={{
                my: 1,
                mx: 1.5,
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to="/about"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to="/projects"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Projects
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to="/contact"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default MenuBar;
