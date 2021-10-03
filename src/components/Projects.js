import "./Projects.css";
import HeadingTitle from "./HeadingTitle";
import React from "react";
import Project from "./Project";
import flappy from "../assets/articuno.png";
import auth from "../assets/auth.png";
import food from "../assets/food.png";
import expenses from "../assets/expenses.png";
import week from "../assets/week.png";
import mapty from "../assets/mapty.png";
import db from "../assets/db.png";
import cehub from "../assets/cehub.png";

const PROJECTS = [
  {
    img: cehub,
    title: "CE-HUB",
    github: "https://github.com/Levvw/CE-HUB",
    info: `Website for BUE Computer Engineering 19'24 students to provide a clean day by day schedule with zoom links and other features. For a better online-learning experience. Html,Css & JS are used in the front-end, NodeJS & MongoDB for the back-end.`,
    images: [
      {
        url: "https://i.ibb.co/44C4KzD/cehub1.png",
      },

      {
        url: "https://i.ibb.co/8BPSwB0/cehub2.png",
      },

      {
        url: "https://i.ibb.co/zHYg2Zj/cehub3.png",
      },
    ],
    url: "https://ce-hub.herokuapp.com/schedule",
    tech: ["Node", "Express", "MongoDB"],
  },
  {
    img: flappy,
    title: "Flappynivia",
    github: "https://github.com/Levvw/Flappynivia",
    info: `Fun arcade game implemented using Unity Engine and C# programming language inspired by Articuno & Anivia, received over 200 downloads.`,
    images: [
      {
        url: " https://i.ibb.co/jV3KysS/flappy2.png",
      },
    ],
    url: "https://drive.google.com/file/d/1LVZsqCdFU8nb02j7OzdRb5oDMsHIHDvz/view",
    tech: ["Unity", "C#"],
  },
  {
    img: mapty,
    title: "Mapty",
    github: "https://github.com/Levvw/Mapty",
    info: "Web App that maps your workouts based on your location using Leaflet library, vanilla JS and Geolocation API. implemented with OOP principles, hosted at github pages.",
    images: [
      {
        url: " https://i.ibb.co/PgNmBXb/mapty1.png",
      },

      {
        url: "  https://i.ibb.co/pKkVX1c/mapty2.png",
      },
    ],
    url: "https://levvw.github.io/Mapty/",
    tech: ["Leaflet", "Javascript"],
  },
  {
    img: week,
    title: "WeekDay",
    github: `https://github.com/Levvw/weekday`,
    info: `Website to calculate the week day from the date information using vanilla JS, hosted at github pages.`,
    images: [
      {
        url: "https://i.ibb.co/hgnWksx/week1.png",
      },
      {
        url: "https://i.ibb.co/qxFggbW/week2.png",
      },
    ],
    url: "https://levvw.github.io/weekday/",
    tech: ["Javascript"],
  },
  {
    img: food,
    title: "Food-order",
    github: "https://github.com/Levvw/food-order",
    info: `Levw Meals! food ordering app using react js and Firebase to store the meals!`,
    tech: ["React", "Firebase"],
  },
  {
    img: auth,
    title: "ReactAuth",
    github: "https://github.com/Levvw/react-auth",
    info: `Implementing Authentication in using React.js and used Firebase to create accounts,store them and login. used third party libraries such as redux for app-wide states, router and surge for deployment`,
    images: [
      {
        url: "https://i.ibb.co/XSDwKN4/auth1.png",
      },
    ],
    url: "https://levw-auth.surge.sh/",
    tech: ["React", "Redux", "Router", "Firebase"],
  },
  {
    img: db,
    title: "Skills Storage",
    github: "https://github.com/Levvw/Python-SQLite-Skills-Project",
    info: "Created a SQLlite database using python for storing the skills of a person and their progress",
    tech: ["Python", "SQLite"],
  },
  {
    img: expenses,
    title: "Expenses Tracker",
    github: "https://github.com/Levvw/expenses-tracker",
    info: "Simple expenses tracker using react js, hosted at surge",
    images: [
      {
        url: "https://i.ibb.co/7tM6Hj9/expenses1.png",
      },
      {
        url: "https://i.ibb.co/fS0LBfS/expenses2.png",
      },
    ],
    url: "https://expenses-levw.surge.sh/",
    tech: ["React"],
  },
];

function Projects() {
  return (
    <React.Fragment>
      <HeadingTitle title="Projects" />
      <div className="wrapper">
        <div className="team">
          {PROJECTS.map((project, i) => (
            <Project
              title={project.title}
              img={project.img}
              github={project.github}
              info={project.info}
              images={project.images}
              url={project.url}
              tech={project.tech}
              id={i}
            />
          ))}
        </div>
        <div id="skills"></div>
      </div>
    </React.Fragment>
  );
}
export default Projects;
