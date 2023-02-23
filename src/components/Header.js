import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={classes.intro}>
        <div data-aos="fade-right" className={classes.hello}>
          Hi, my name is
        </div>
        <div data-aos="fade-right" className={classes.myName}>
          Abdelrahman Mostafa
        </div>
        <div data-aos="fade-right" className={classes.myRole}>
          I'm a Software Engineer
        </div>
        <div data-aos="fade" className={classes.aboutme}>
          My passion is using{" "}
          <span className={classes.gradient}>science and technology</span> to
          build high performance, scalable and well designed systems and
          <span> solving </span> 🎯 hard <span>problems</span>. I also like to{" "}
          <span>
            <a
              href="https://dev.to/levw"
              style={{
                color: "#00E8FC",
                fontWeight: "bold",
              }}
              target="_blank"
              rel="noreferrer"
            >
              write
            </a>
          </span>
          , sometimes.
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
}
export default Header;
