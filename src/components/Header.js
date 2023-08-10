import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={classes.intro}>
        <div
          data-aos="fade-down"
          data-aos-duration="1400"
          className={classes.hello}
        >
          Hi, my name is
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className={classes.myName}
        >
          Ahmed Wael
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className={classes.myRole}
        >
          I'm a Software Engineer
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          className={classes.aboutme}
        >
          My passion is using{" "}
          <span className={classes.gradient}>science and technology</span> to
          build high performance, scalable and well designed systems and
          <span> solving </span> 🎯 hard <span>problems</span>. I also like to{" "}
          <span>
            <a
              href="https://blog.levwtech.com"
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
