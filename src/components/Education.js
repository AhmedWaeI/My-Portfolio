import React from "react";
import classes from "./Education.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import HeadingTitle from "./HeadingTitle";
import bue from "../assets/bue.jpg";
function Header() {
  Aos.init();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <HeadingTitle title="Education" />
      <div className={classes.uni}>
        <div className={classes.bueLogo}>
          <img alt="BUE Logo" src={bue}></img>
        </div>
        <div className={classes.bueInfo}>
          <div className={classes.bue}>
            The British University in Egypt (BUE)
          </div>
          <div className={classes.major}>
            Bachelor of Science in Computer Engineering
          </div>
          <div className={classes.date}>2019-2024</div>
          <div className={classes.gpa}>Cumulative GPA: 4.0/4.0 A+</div>
          <div className={classes.points}>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Systems</li>
              <li>Software Engineering</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="work"></div>
      <div style={{ marginBottom: "30px" }}></div>
    </div>
  );
}
export default Header;
