import React from "react";
import classes from "./Header.module.css";
import me from "../assets/me.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  Aos.init();
  return (
    <div className={classes.container}>
      <div className={classes.intro}>
        <div>
          <div data-aos="fade-right" className={classes.hello}>
            my name is
          </div>
          <div data-aos="fade-right" className={classes.myName}>
            Abdelrahman Mostafa
            <img
              src="https://media.tenor.com/Wx9IEmZZXSoAAAAi/hi.gif"
              alt="waving hand"
              style={{ width: "40px", height: "40px" }}
            ></img>
          </div>
        </div>
        <div className={classes.seperator}></div>
        <div className={classes.box}>
          <img className={classes.img} src={me} alt="My Beautiful Face" />
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
}
export default Header;
