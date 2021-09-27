import React from "react";
import classes from "./Header.module.css";
import me from "../assets/me.jpeg";
function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.hello}>Hello! my name is</div>
      <div className={classes.myName}>Abdelrahman Mostafa</div>

      <div className={classes.imgcontainer}>
        <img className={classes.img} src={me} alt="My Beautiful Face" />
      </div>
      <ul className={classes.roles}>
        <li>💻 Software Engineer</li>
        <li>😎 Front-End Developer</li>
      </ul>
    </div>
  );
}
export default Header;
