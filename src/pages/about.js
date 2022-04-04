import { Typography, Grid, Paper, Divider } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import image2 from "../components/images/landscape2.jpg";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(() => ({
  borderRadius: "none",
  boxShadow: "none",
  padding: "0 50px",
}));

function About() {
  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h1" gutterBottom style={{ fontSize: "30px" }}>
              Who am <span style={{ color: "#008081" }}>Anette Pedersen,</span>{" "}
              you probably wonder?
            </Typography>
            <Divider />
            <Typography
              variant="body1"
              align="left"
              style={{ padding: "5rem 2rem" }}
            >
              I'm a creative person who loves to work with details. At work I
              find it instructive and inspiring to work in teams. I like to
              learn from others and I think it's nice to share my experiences
              with others too. I think this is a good way to develop ourselves.
              I also think it's nice to work on and solve problems on my own.
              <br />
              <br /> As a frontend developer, I have focus on being up to date
              in my field. I am genuinely interested in development, technology
              and code. I want to constantly develop myself and I am always
              looking for opportunities to learn new things. This is what makes
              the subject so interesting to me. <br />
              <br />I am a social person at work and likes to have a good
              collegial unity with a coffee at lunch. I am a colleague you can
              trust, have a high work ethic and likes a hectic day at work.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item align="center">
            <CardMedia
              component="img"
              image={image2}
              alt="desktop landscape"
              sx={{ maxHeight: "500px", width: "100%" }}
            />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
