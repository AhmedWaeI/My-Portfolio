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
import router from "../assets/Skills/router.svg";
import redux from "../assets/Skills/redux.svg";
import python from "../assets/Skills/python.png";
import firebase from "../assets/Skills/firebase.svg";
import vs from "../assets/Skills/vs.svg";
import vscode from "../assets/Skills/vscode.svg";
import github from "../assets/Skills/github.png";
import git from "../assets/Skills/git.png";
import node from "../assets/Skills/node.png";
import express from "../assets/Skills/express.png";
import mongo from "../assets/Skills/mongo.png";
import mongoose from "../assets/Skills/mongoose.png";
import postman from "../assets/Skills/postman.png";
import mysql from "../assets/Skills/mysql.png";
import sql from "../assets/Skills/sql.png";

import Aos from "aos";
import "aos/dist/aos.css";
function Skills() {
  Aos.init();
  const Skills = [
    { skill: "Html", img: html },
    { skill: "Css", img: css },
    { skill: "Javascript", img: js },
    { skill: "React", img: react },
    { skill: "Redux", img: redux },
    { skill: "Router", img: router },
    { skill: "Node", img: node },
    { skill: "Express", img: express },
    { skill: "MongoDB", img: mongo },
    { skill: "Mongoose", img: mongoose },
    { skill: "SQL", img: sql },
    { skill: "MySQL", img: mysql },
    { skill: "Postman", img: postman },
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
    <div className="parentSkills" data-aos="zoom-in">
      <HeadingTitle title="My Skills" />
      <div className="skillsContainer">
        {Skills.map((Skill) => (
          <div className="innerSkillCon">
            <img src={Skill.img} alt={`${Skill.skill}`} />{" "}
            <label>{Skill.skill}</label>
          </div>
        ))}
      </div>
      {/* <div class="mastercontainer">
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
      </div> */}
    </div>
  );
}
export default Skills;
