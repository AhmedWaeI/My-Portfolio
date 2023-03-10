import "./Nav.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [navClass, setNavClass] = useState("navbar-links");
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    closeNav();
    setScrollY(window.scrollY);
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
    setOpen((open) => !open);
    if (navClass === "navbar-links") setNavClass("navbar-links active");
    if (navClass === "navbar-links active") setNavClass("navbar-links");
  }
  function closeNav() {
    setNavClass("navbar-links");
    setOpen(false);
  }
  return (
    <nav
      className="navbar"
      id="navbar"
      style={
        scrollY !== 0
          ? { boxShadow: "rgba(4, 2, 27, 0.603) 0px 10px 30px -10px" }
          : {}
      }
    >
      <div className="brand-title">Levw</div>
      {!open ? (
        <span class="toggle-button" onClick={onClickHandler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
      ) : (
        <span class="toggle-button" onClick={onClickHandler}>
          <i
            class="fas fa-times close-icon fa-2x"
            style={{ color: "white", marginLeft: "5px" }}
          ></i>
        </span>
      )}
      <div className={navClass}>
        <ul>
          <HashLink
            className="remove"
            smooth
            to="/#about"
            onClick={closeNav}
            style={
              window.screen.availWidth <= 650
                ? { marginTop: "22vh" }
                : { marginTop: "0px" }
            }
          >
            <li>About</li>
          </HashLink>
          <HashLink
            className="remove"
            smooth
            to="/#education"
            onClick={closeNav}
          >
            <li>Education</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#work" onClick={closeNav}>
            <li>Work</li>
          </HashLink>
          <HashLink
            className="remove"
            smooth
            to="/#projects"
            onClick={closeNav}
          >
            <li>Projects</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#skills" onClick={closeNav}>
            <li>Skills</li>
          </HashLink>
          <HashLink className="remove" smooth to="/#contact" onClick={closeNav}>
            <li>Contact</li>
          </HashLink>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
