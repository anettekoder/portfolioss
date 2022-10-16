import {
  Typography,
  Grid,
  Paper,
  Divider,
  CardActionArea,
  Link,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import recycleImg from "../components/images/recycle.jpg";
import homedecoreImg from "../components/images/interior.jpg";
import campingImg from "../components/images/camping.jpg";
import CardMedia from "@mui/material/CardMedia";
// import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCards";

const Item = styled(Paper)(() => ({
  borderRadius: "none",
  boxShadow: "none",
  padding: "0 50px",
}));

function Projects() {
  return (
    <div>
      <ProjectCard />
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12} style={{ marginBottom: "30px" }}>
          <Item>
            <Typography variant="h1" gutterBottom style={{ fontSize: "30px" }}>
              Other Projects
            </Typography>
            <Divider />
          </Item>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item align="left">
            <CardActionArea component="div" disableRipple>
              <Link
                href="https://anettekoder.one/Re-Cycle/"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: "400" }}
                >
                  Re-Cycle // Travel agency with focus on the environment.
                </Typography>
                <CardMedia
                  component="img"
                  image={recycleImg}
                  alt="interior"
                  sx={{ height: "300px", width: "100%" }}
                />
              </Link>
            </CardActionArea>
          </Item>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item align="left">
            <CardActionArea
              className="actionCard"
              component="div"
              disableRipple
            >
              <Link
                href="https://anettekoder.one/HomeDecor/"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: "400" }}
                >
                  Home Decore // Scandinavian interior design company
                </Typography>
                <CardMedia
                  component="img"
                  image={homedecoreImg}
                  alt="nature landscape"
                  sx={{ height: "300px", width: "100%" }}
                />
              </Link>
            </CardActionArea>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item align="left">
            <CardActionArea
              className="actionCard"
              component="div"
              disableRipple
            >
              <Link
                href="https://anettekoder.one/Project%20Exam%201%20(2)/index.html"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: "400" }}
                >
                  Happy Camping // A blog about camping life and camping
                  equipment
                </Typography>
                <CardMedia
                  component="img"
                  image={campingImg}
                  alt="camping with tent"
                  sx={{ height: "300px", width: "100%" }}
                />
              </Link>
            </CardActionArea>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
