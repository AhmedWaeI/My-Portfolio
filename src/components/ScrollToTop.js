import React, { useState } from "react";
import { useEffect } from "react";
import "./ScrollToTop.css";
import scrollTop from "../assets/scrollTop.png";
function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-to-top ${showButton ? "show" : "hide"}`}
      onClick={handleClick}
    >
      <img
        src={scrollTop}
        alt="scroll to top icon"
        style={{ width: "40px", height: "40px" }}
      ></img>
      <i className="fas fa-arrow-up"></i>
    </div>
  );
}

export default ScrollToTop;
