import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import classes from "./App.module.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./Footer";
function App() {
  return (
    <div className={classes.container}>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
