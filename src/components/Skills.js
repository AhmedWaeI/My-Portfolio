import "./Skills.css";
import "./Skills2.css";
import HeadingTitle from "./HeadingTitle";
import React from "react";

import js from "../assets/Skills/js.png";
import ts from "../assets/Skills/ts.png";
import cpp from "../assets/Skills/cpp.svg";
import react from "../assets/Skills/react.svg";
import css from "../assets/Skills/css.png";
import scss from "../assets/Skills/sass.png";
import html from "../assets/Skills/html.png";
import npm from "../assets/Skills/npm.png";
import redux from "../assets/Skills/redux.svg";
import rn from "../assets/Skills/rn.png";
import docker from "../assets/Skills/docker.png";
import kubernetes from "../assets/Skills/kubernetes.png";
import python from "../assets/Skills/python.png";
import firebase from "../assets/Skills/firebase.svg";
import git from "../assets/Skills/git.png";
import node from "../assets/Skills/node.png";
import express from "../assets/Skills/express.png";
import mongo from "../assets/Skills/mongo.png";
import mongoose from "../assets/Skills/mongoose.png";
import mysql from "../assets/Skills/mysql.png";
import sql from "../assets/Skills/sql.png";

import Aos from "aos";
import "aos/dist/aos.css";
function Skills() {
  Aos.init();
  const Skills = [
    { skill: "Html", img: html },
    { skill: "Css", img: css },
    { skill: "Scss", img: scss },
    { skill: "Javascript", img: js },
    { skill: "Typescript", img: ts },
    { skill: "React", img: react },
    { skill: "Redux", img: redux },
    { skill: "React Native", img: rn },
    { skill: "Node", img: node },
    { skill: "Express", img: express },
    { skill: "MongoDB", img: mongo },
    { skill: "Mongoose", img: mongoose },
    { skill: "SQL", img: sql },
    { skill: "MySQL", img: mysql },
    { skill: "Docker", img: docker },
    { skill: "Kubernetes", img: kubernetes },
    { skill: "Npm", img: npm },
    { skill: "Git", img: git },
    { skill: "C++", img: cpp },
    { skill: "Python", img: python },
    { skill: "Firebase", img: firebase },
  ];
  return (
    <div
      className="parentSkills"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="skillsContainer" style={{ marginTop: "200px" }}></div>
      <HeadingTitle title="Skills" />
      <div
        className="skillsContainer"
        style={{ marginTop: "20px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
