import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <React.Fragment>
      <div className={classes.links}>
        <a target="_blank" href="https://github.com/Levvw" rel="noreferrer">
          <img
            alt="github"
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/levw/"
          rel="noreferrer"
        >
          <img
            alt="linkedin"
            src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v2.png"
          />
        </a>
      </div>
      <div className={classes.footer}>
        Desgined &#38; Built by Abdelrahman Mostafa
      </div>
      <div id="contact"></div>
    </React.Fragment>
  );
}
export default Footer;
