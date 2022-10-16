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
            <Typography variant="body1" align="left">
              For this assignment:
              <ul>
                <li>The HTML should be semantic and neat.</li>
                <li>
                  The CSS should follow the DRY principle and be easy to read.
                </li>
                <li>
                  The website should be responsive and look good at every screen
                  size with no horizontal scrollbars.
                </li>
                <li>
                  The site should be WCAG compliant and accessibility taken into
                  account.
                </li>
                <li>
                  Each page should have a unique meta description, title, and
                  h1.
                </li>
              </ul>
              This is one of the first webpages I created.
            </Typography>
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
            <Typography variant="body1" align="left">
              For this assignment:
              <ul>
                <li>Create a simple logo</li>
                <li>
                  Include basic content:
                  <ul>
                    <li>Heading</li>
                    <li>Navigation</li>
                    <li>A few content areas</li>
                    <li>Can use latin text</li>
                  </ul>
                </li>
                <li>Choose a colour scheme with 2-3 colors</li>
                <li>
                  Find online/choose or create and use a seamless
                  textures/pattern for use in the background of the website.
                </li>
                <li>
                  Take at least 3 photos for the product images for the page,
                  using a camera phone or digital camera. Optimise them for web.
                </li>
                <li>
                  Choose minimum 1 photo for use as a main/introduction photo on
                  the products page.
                </li>
                <li>
                  Design and create 2 different icons for use on the page and
                  include in the webpage code. The icons should also look good
                  on smaller screen sizes.
                </li>
              </ul>
              This was a fun design assignment where I choosed to use Photoshop
              for editing images and Illustrator for the Icons. I also enjoyed
              to work with patterns in the design and chosed to use pattern in
              the logo to match the branding. This was an assignment splitted i
              4 different submissions with themes:
              <ul>
                <li>Colors and Textures</li>
                <li>Graphics for Web and Display</li>
                <li>Typography for Web</li>
                <li>Additional Design Tasks</li>
              </ul>
            </Typography>
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
            <Typography variant="body1" align="left">
              For this assignment:
              <ul>
                <li>Use WP for headless cms</li>
                <li>Use REST API to fetch data from WP</li>
                <li>
                  Include:
                  <ul>
                    <li>Homepage</li>
                    <li>About</li>
                    <li>List of posts</li>
                    <li>Post specific</li>
                    <li>Contact form (nothing advanced)</li>
                  </ul>
                </li>
                <li>Carousel on homepage of latest posts</li>
                <li>Show at least 10 posts on blog page</li>
                <li>Specific blog content changes after right ID of posts</li>
              </ul>
              This was not an assignment with big focus on the design, but since
              I love a nice and clean webdesign, I spent some time on it anyway.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
