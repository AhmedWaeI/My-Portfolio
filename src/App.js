import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import classes from "./App.module.css";
import About from "./components/About";
function App() {
  return (
    <div className={classes.container}>
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
