import "./Skills.css";
import HeadingTitle from "./HeadingTitle";
import React from "react";
function Skills() {
  return (
    <React.Fragment>
      <HeadingTitle title="My Skills" />
      <div class="mastercontainer">
        <p>JavaScript (ES6+)</p>
        <div class="container">
          <div class="skills js">100%</div>
        </div>
        <p>React/Redux/Router</p>
        <div class="container">
          <div class="skills react">95%</div>
        </div>

        <p>HTML</p>
        <div class="container">
          <div class="skills html">90% </div>
        </div>

        <p>CSS</p>
        <div class="container">
          <div class="skills css">80%</div>
        </div>
        <p>C++/Python</p>
        <div class="container">
          <div class="skills cpython">75%</div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Skills;
