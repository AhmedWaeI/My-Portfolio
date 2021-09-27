import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import classes from "./App.module.css";
import HeadingTitle from "./components/HeadingTitle";
function App() {
  return (
    <div className={classes.container}>
      <Nav />
      <Header />
    </div>
  );
}

export default App;
