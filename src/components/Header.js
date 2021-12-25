import React from "react";
import classes from "./Header.module.css";
import me from "../assets/me.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  Aos.init();
  return (
    <div className={classes.container}>
      <div data-aos="fade-right" className={classes.hello}>
        Hello! my name is
      </div>
      <div data-aos="fade-right" className={classes.myName}>
        Abdelrahman Mostafa
      </div>

      <div className={classes.imgcontainer}>
        <img
          data-aos="zoom-in-up"
          className={classes.img}
          src={me}
          alt="My Beautiful Face"
        />
      </div>
      <ul data-aos="fade-right" className={classes.roles}>
        <li>💻 Software Engineer</li>
        <li>😎 Full Stack Developer</li>
      </ul>
      <div id="about"></div>
    </div>
  );
}
export default Header;
