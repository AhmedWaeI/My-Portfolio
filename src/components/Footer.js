import React from "react";
import classes from "./Footer.module.css";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
function Footer() {
  return (
    <div>
      <div className={classes.links}>
        <a target="_blank" href="https://github.com/LevwTech" rel="noreferrer">
          <img alt="github" src={github} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/levw/"
          rel="noreferrer"
        >
          <img alt="linkedin" src={linkedin} />
        </a>
      </div>
      <div className={classes.footer}>
        Designed &#38; Built by Abdelrahman Mostafa
      </div>
      <div id="contact"></div>
    </div>
  );
}
export default Footer;
