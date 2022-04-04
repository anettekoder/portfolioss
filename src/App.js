import "./App.css";
import React from "react";
import NavBar from "./components/navBar/navbar";
import MenuBar from "./components/navBar/menubar";
import Footer from "./components/footer/footer";
import Home from "./pages/index";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <MenuBar />
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
