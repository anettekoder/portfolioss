import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia, CardActionArea, Link } from "@mui/material";
import comfyImg from "../components/images/sp2-screenshot.jpg";
import animalfactsImg from "../components/images/jsframeworks-screenshot.jpg";
import holidazeImg from "../components/images/holidaze-screenshot.jpg";

const Item = styled(Paper)(() => ({
  borderRadius: "none",
  boxShadow: "none",
  boxSizing: "border-box",
  margin: "2rem",
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "10rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Item>
            <Typography variant="h1" gutterBottom style={{ fontSize: "30px" }}>
              Main Projects
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item align="left">
            {" "}
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              Semester Project 2
            </Typography>
            <Typography
              variant="body4"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              Goal: To create an e-commerce website that has both
              customer-facing and admin sections. Both sections should be
              responsive and the website will be populated by a Strapi API
              supplied by Noroff. <br />
              <br />
              Unfortunately, I have some trouble with strapi, so pictures of
              products do not appear in the picture. I am working on this.
            </Typography>
            <br />
            <br />
            <Link
              href="https://github.com/anettekoder/feu2-semester-project-2-.git"
              underline="hover"
            >
              Link to GitHub
            </Link>
            <CardActionArea
              className="actionCard"
              component="div"
              disableRipple
            >
              <Link
                href="https://github.com/anettekoder/feu2-semester-project-2-.git"
                style={{ textDecoration: "none", color: "black" }}
              >
                <CardMedia
                  component="img"
                  image={comfyImg}
                  alt="image of the webpage"
                  sx={{ height: "300px", width: "100%" }}
                />
              </Link>
            </CardActionArea>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item align="left">
            {" "}
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              JavaScript Frameworks CA
            </Typography>
            <Typography
              variant="body4"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              Goal: Create either a new React or Next.js. The assignment
              required various criteria to pass. It should include pages such as
              "details" "contact" "login" and "admin". Read more about the
              criteria in GitHub.
            </Typography>
            <br />
            <br />
            <Link
              href="https://github.com/anettekoder/feu2-js-frameworks-ca.git"
              underline="hover"
            >
              Link to GitHub
            </Link>
            <CardActionArea
              className="actionCard"
              component="div"
              disableRipple
            >
              <Link
                href="https://github.com/anettekoder/feu2-js-frameworks-ca.git"
                style={{ textDecoration: "none", color: "black" }}
              >
                <CardMedia
                  component="img"
                  image={animalfactsImg}
                  alt="image of the webpage"
                  sx={{ height: "300px", width: "100%" }}
                />
              </Link>
            </CardActionArea>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item align="left">
            {" "}
            <Typography
              variant="body2"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              Project Exam 2
            </Typography>
            <Typography
              variant="body4"
              gutterBottom
              style={{ fontWeight: "400" }}
            >
              To take the skills learned over the last two years and take on an
              extensive project where the finished product should reflect the
              candidate's general development capabilities, in addition to
              visual and technical skills.
            </Typography>
            <br />
            <br />
            <Link
              href="https://github.com/anettekoder/project-exam-2.git"
              underline="hover"
            >
              Link to GitHub
            </Link>
            <br />
            <Link
              href="https://holidazebooking-project-exam.netlify.app"
              underline="hover"
            >
              Link to Live Site
            </Link>
            <CardActionArea
              className="actionCard"
              component="div"
              disableRipple
            >
              <Link
                href="https://holidazebooking-project-exam.netlify.app"
                style={{ textDecoration: "none", color: "black" }}
              >
                <CardMedia
                  component="img"
                  image={holidazeImg}
                  alt="image of the webpage"
                  sx={{ height: "300px", width: "100%" }}
                />
              </Link>
            </CardActionArea>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
