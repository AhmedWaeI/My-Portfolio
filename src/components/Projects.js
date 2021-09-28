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
  },
  {
    img: flappy,
    title: "Flappynivia",
    github: "https://github.com/Levvw/Flappynivia",
    info: `Fun arcade game implemented using Unity Engine and C# programming language inspired by Articuno & Anivia, received over 200 downloads.`,
  },
  {
    img: mapty,
    title: "Mapty",
    github: "https://github.com/Levvw/Mapty",
    info: "Web App that maps your workouts based on your location using Leaflet library, vanilla JS and Geolocation API. implemented with OOP principles, hosted at github pages.",
  },
  {
    img: week,
    title: "WeekDay",
    github: `https://github.com/Levvw/weekday`,
    info: `Website to calculate the week day from the date information using vanilla JS, hosted at github pages.`,
  },
  {
    img: food,
    title: "Food-order",
    github: "https://github.com/Levvw/food-order",
    info: `Levw Meals! food ordering app using react js and Firebase to store the meals!`,
  },
  {
    img: auth,
    title: "ReactAuth",
    github: "https://github.com/Levvw/react-auth",
    info: `implementing Authentication in using React.js and used Firebase to create accounts,store them and login. used third party libraries such as redux for app-wide states, router and surge for deployment`,
  },
  {
    img: db,
    title: "Skills Storage",
    github: "https://github.com/Levvw/Python-SQLite-Skills-Project",
    info: "Created a SQLlite database using python for storing the skills of a person and their progress",
  },
  {
    img: expenses,
    title: "Expenses Tracker",
    github: "https://github.com/Levvw/expenses-tracker",
    info: "simple expenses tracker using react js, hosted at surge",
  },
];
function Projects() {
  return (
    <React.Fragment>
      <HeadingTitle title="Projects" />
      <div className="wrapper">
        <div className="team">
          {PROJECTS.map((project) => (
            <Project
              title={project.title}
              img={project.img}
              github={project.github}
              info={project.info}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Projects;
