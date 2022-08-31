import "./Nav.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
function Nav() {
  const [navClass, setNavClass] = useState("navbar-links");
  function onClickHandler() {
    if (navClass === "navbar-links") setNavClass("navbar-links active");
    if (navClass === "navbar-links active") setNavClass("navbar-links");
  }
  return (
    <nav className="navbar">
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
