import "./Skills.css";
import "./Skills2.css";
import HeadingTitle from "./HeadingTitle";
import React from "react";

import js from "../assets/Skills/js.png";
import cpp from "../assets/Skills/cpp.svg";
import react from "../assets/Skills/react.svg";
import css from "../assets/Skills/css.png";
import html from "../assets/Skills/html.png";
import npm from "../assets/Skills/npm.png";
import router from "../assets/Skills/redux.svg";
import redux from "../assets/Skills/router.svg";
import python from "../assets/Skills/python.png";
import firebase from "../assets/Skills/firebase.svg";
import vs from "../assets/Skills/vs.svg";
import vscode from "../assets/Skills/vscode.svg";
import github from "../assets/Skills/github.png";
import git from "../assets/Skills/git.png";
function Skills() {
  const Skills = [
    { skill: "Html", img: html },
    { skill: "Css", img: css },
    { skill: "Javascript", img: js },
    { skill: "React", img: react },
    { skill: "Redux", img: redux },
    { skill: "Router", img: router },
    { skill: "Npm", img: npm },
    { skill: "Git", img: git },
    { skill: "Github", img: github },
    { skill: "Vscode", img: vscode },
    { skill: "Vs", img: vs },
    { skill: "C++", img: cpp },
    { skill: "Python", img: python },
    { skill: "Firebase", img: firebase },
  ];
  return (
    <div className="parentSkills">
      <HeadingTitle title="My Skills" />
      <div className="skillsContainer">
        {Skills.map((Skill) => (
          <div className="innerSkillCon">
            <img src={Skill.img} alt={`${Skill.skill}`} />{" "}
            <label>{Skill.skill}</label>
          </div>
        ))}
      </div>
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
    </div>
  );
}
export default Skills;
