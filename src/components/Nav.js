import "./Nav.css";
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
      <span href="#" class="toggle-button" onClick={onClickHandler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      <div className={navClass}>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
