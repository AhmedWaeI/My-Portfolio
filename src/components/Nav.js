import "./Nav.css";
import { useState } from "react";
function Nav() {
  const [navClass, setNavClass] = useState("navbar-links");
  function onClickHandler() {
    if (navClass === "navbar-links") setNavClass("navbar-links active");
    if (navClass === "navbar-links active") setNavClass("navbar-links");
  }
  return (
    <nav class="navbar">
      <div class="brand-title">Levw</div>
      <a href="#" class="toggle-button" onClick={onClickHandler}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class={navClass}>
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
