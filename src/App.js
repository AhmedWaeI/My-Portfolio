import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import classes from "./App.module.css";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <div className={classes.container}>
          <Nav />
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Header />
            <About />
          </div>
          <Education />
          <Work />
          <Projects />
          <Skills />
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Contact />
            <Footer />
          </div>

          <ScrollToTop />
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
