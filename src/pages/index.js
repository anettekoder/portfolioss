import { Divider, Typography, Grid, CardActionArea } from "@mui/material";
import * as React from "react";
import PrimaryButton from "../styles/myButton";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import image1 from "../components/images/landscape1.jpg";
import { Link, useNavigate } from "react-router-dom";

const Item = styled(Paper)(() => ({
  borderRadius: "none",
  boxShadow: "none",
  boxSizing: "border-box",
}));

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h1">
              Hi! I am <span style={{ color: "#008081" }}>Anette Pedersen</span>
            </Typography>
            <Typography variant="h2">and I am a Front End Developer</Typography>
            <PrimaryButton
              variant="contained"
              onClick={() => navigate("/contact")}
              sx={{ marginTop: "2rem" }}
            >
              Contact me
            </PrimaryButton>
          </Item>
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        spacing={1}
        style={{ marginTop: "10rem" }}
      >
        <Grid item xs={12} md={6}>
          <Item
            style={{
              backgroundColor: "rgba(0, 128, 129, 0.3)",
              borderRadius: "0",
              height: "550px",
              width: "auto",
            }}
          >
            <div style={{ margin: "0 3rem 0 3rem" }}>
              <Typography
                variant="h3"
                align="left"
                style={{ padding: "30px 0" }}
              >
                SKILLS ||
              </Typography>
              <Typography
                variant="body1"
                align="left"
                style={{ marginBottom: "1rem" }}
              >
                HTML
              </Typography>
              <Divider />

              <Typography
                variant="body1"
                align="left"
                style={{ marginBottom: "1rem" }}
              >
                CSS/SCSS/SASS
              </Typography>
              <Divider />

              <Typography
                variant="body1"
                align="left"
                style={{ marginBottom: "1rem" }}
              >
                Java Script
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="left"
                style={{ marginBottom: "1rem" }}
              >
                Bootstrap
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="left"
                style={{ marginBottom: "1rem" }}
              >
                React
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="left"
                style={{ marginBottom: "1rem" }}
              >
                Material UI
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                align="left"
                style={{ marginBottom: "1rem" }}
              >
                UX Design
              </Typography>
              <Divider />
              <Typography
                variant="h3"
                align="left"
                style={{ padding: "1rem 3rem" }}
              >
                Feel free to contact me for a non-binding conversation to find
                out if we are a good match.
                <br />
              </Typography>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item align="center" sx={{ height: "550px", width: "auto" }}>
            <CardActionArea component="div" disableRipple>
              <Link to="/contact">
                <div style={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={image1}
                    alt="desktop landscape"
                    sx={{ height: "550px", width: "100%" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      width: "100%",
                      height: "50px",
                      justifyContent: "center",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {" "}
                    <Typography
                      variant="h3"
                      style={{ paddingTop: "10px", textTransform: "uppercase" }}
                    >
                      Contact me
                    </Typography>
                  </div>
                </div>
              </Link>
            </CardActionArea>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
