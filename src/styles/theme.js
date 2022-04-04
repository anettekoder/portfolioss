import { createTheme } from "@mui/material/styles";

import Image from "../components/images/background.jpg";

// Fonts
const noto = "'Noto Serif', serif";
const karla = "'Karla', serif";

//Colors
const Colors = {
  primary: "#008081",
  secondary: "#000000",
};

const theme = createTheme({
  palette: {
    backgroundImage: `url(${Image})`,
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    h1: {
      fontFamily: noto,
      fontSize: "50px",
      fontWeight: 400,
    },
    h2: {
      fontFamily: karla,
      fontSize: "35px",
      fontWeight: 200,
    },
    h3: {
      fontFamily: noto,
      fontSize: "20px",
    },
    body1: {
      fontFamily: karla,
      fontSize: "18px",
      fontWeight: 200,
    },
    body2: {
      fontFamily: karla,
      fontSize: "20px",
      fontWeight: 200,
    },
    subtitle1: {
      fontFamily: noto,
      fontSize: "30px",
      fontWeight: 400,
      color: "#008081",
    },
  },
});

export default theme;
