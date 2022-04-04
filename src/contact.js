import * as React from "react";
import myImage from "../components/images/img.jpg";
import { Divider, Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(() => ({
  borderRadius: "none",
  boxShadow: "none",
  borderBox: "boxZize",

  margin: "0 2rem",
}));

function Contact() {
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h1" gutterBottom>
              Let us Work <span style={{ color: "#008081" }}>Together</span>
            </Typography>
            <Divider />
          </Item>
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        spacing={1}
        style={{ marginTop: "10rem" }}
      >
        <Grid item xs={12} md={6} justify="center">
          <Item>
            <Typography variant="h2" align="center">
              Contact me:
            </Typography>
            <Typography variant="h1" align="center" style={{ padding: "0" }}>
              <span style={{ color: "#008081", fontSize: "30px" }}>
                {" "}
                anettep85@gmail.com
              </span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item align="center" sx={{ height: "400px", width: "auto" }}>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={myImage}
                alt="Anette Pedersen"
                justify="center"
                sx={{ height: "300px", width: "300px" }}
              />
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
