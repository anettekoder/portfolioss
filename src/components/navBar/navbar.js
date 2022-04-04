import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

function NavBar() {
  return (
    // Icon bar
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Grid
          container
          direction="row"
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            padding: "0.3rem 2rem",
          }}
        >
          <Grid
            item
            container
            direction="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              paddingTop: "0.4rem",
            }}
          >
            <Link
              color="inherit"
              title="linkedIn logo"
              style={{ paddingRight: "0.5rem" }}
              href="https://www.linkedin.com/in/anette-pedersen-509113122/"
            >
              <LinkedInIcon fontSize="medium" />
            </Link>
            <Link
              color="inherit"
              title="github logo"
              href="https://github.com/anettekoder"
            >
              <GitHubIcon fontSize="medium" />
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}

export default NavBar;
