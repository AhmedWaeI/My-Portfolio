import "./Nav.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
function Nav() {
  const [navClass, setNavClass] = useState("navbar-links");
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      // User is scrolling up
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.opacity = "1";
    } else {
      // User is scrolling down
      document.getElementById("navbar").style.top = `-${
        document.getElementById("navbar").offsetHeight
      }px`;
      document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  };
  function onClickHandler() {
    if (navClass === "navbar-links") setNavClass("navbar-links active");
    if (navClass === "navbar-links active") setNavClass("navbar-links");
  }
  return (
    <nav className="navbar" id="navbar">
      <div className="brand-title">Levw</div>
      <span class="toggle-button" onClick={onClickHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      <div className={navClass}>
        <ul>
          <HashLink className="remove" smooth to="/#about">
            <li>About</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#education">
            <li>Education</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#work">
            <li>Work</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#projects">
            <li>Projects</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#skills">
            <li>Skills</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#contact">
            <li>Contact</li>
          </HashLink>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
