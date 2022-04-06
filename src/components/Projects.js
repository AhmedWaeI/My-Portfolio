import "./Projects.css";
import HeadingTitle from "./HeadingTitle";
import React from "react";
import Project from "./Project";
import flappy from "../assets/articuno.png";
import auth from "../assets/auth.png";
import omima from "../assets/omima.png";
import expenses from "../assets/expenses.png";
import week from "../assets/week.png";
import mapty from "../assets/mapty.png";
import weather from "../assets/weather.png";
import cehub from "../assets/cehub.png";

import Aos from "aos";
import "aos/dist/aos.css";
const PROJECTS = [
  {
    img: omima,
    title: "Omima.Art",
    github: "https://omima.art",
    info: "E-commerce shop for selling paintings for a famous egyptian artist. With Authentication, Payment, Collection Systems and Admin Panel. Used React for frontend, Node and MongoDB for the backend. Code is not public contact me to view it.",
    images: [
      {
        url: "https://i.ibb.co/DrzwC5b/Capture.png",
      },
      {
        url: "https://i.ibb.co/6YR3F3x/Capture.png",
      },
      {
        url: "https://i.ibb.co/Tv8FqJz/Capture.png",
      },
    ],
    url: "https://omima.art",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    img: cehub,
    title: "CE-HUB",
    github: "https://github.com/LevwTech/CE-HUB",
    info: `Website for BUE Computer Engineering 19'24 students to provide a clean day by day schedule with zoom links and other features. For a better online-learning experience. Html,Css & JS are used in the Front-end, NodeJS & MongoDB for the Back-end.`,
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
    github: "https://github.com/LevwTech/Flappynivia",
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
    github: "https://github.com/LevwTech/Mapty",
    info: "Web App that maps your workouts based on your location using Leaflet library, vanilla JS and Geolocation API. implemented with OOP principles, hosted at github pages.",
    images: [
      {
        url: " https://i.ibb.co/PgNmBXb/mapty1.png",
      },

      {
        url: "  https://i.ibb.co/pKkVX1c/mapty2.png",
      },
    ],
    url: "https://LevwTech.github.io/Mapty/",
    tech: ["Leaflet", "Javascript"],
  },
  {
    img: weather,
    title: "LevWeather",
    github: "https://github.com/LevwTech/LevWeather",
    info: "Weather app tells weather by city name using Node, Express, Handlebars ,Geolocation & Open Weather APIs.",
    tech: ["Node", "Express", "MongoDB"],
    images: [
      {
        url: "https://i.ibb.co/M7CR9tm/weather.png",
      },
    ],
    url: "https://levweather.herokuapp.com/",
  },
  {
    img: auth,
    title: "ReactAuth",
    github: "https://github.com/LevwTech/react-auth",
    info: `Implementing Authentication in using React and used Firebase to create accounts,store them and login. used third party libraries such as Redux for app-wide states, Router and surge for deployment`,
    images: [
      {
        url: "https://i.ibb.co/XSDwKN4/auth1.png",
      },
    ],
    url: "https://levw-auth.surge.sh/",
    tech: ["React", "Redux", "Router", "Firebase"],
  },
  {
    img: week,
    title: "WeekDay",
    github: `https://github.com/LevwTech/weekday`,
    info: `Website to calculate the week day from the date information using vanilla JS, hosted at github pages.`,
    images: [
      {
        url: "https://i.ibb.co/hgnWksx/week1.png",
      },
      {
        url: "https://i.ibb.co/qxFggbW/week2.png",
      },
    ],
    url: "https://levwtech.github.io/weekday/",
    tech: ["Javascript"],
  },

  {
    img: expenses,
    title: "Expenses Tracker",
    github: "https://github.com/LevwTech/expenses-tracker",
    info: "Simple expenses tracker using React, hosted at surge",
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
  Aos.init();
  return (
    <React.Fragment>
      <div data-aos="zoom-in">
        <HeadingTitle title="Projects" />
      </div>
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
