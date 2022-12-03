import "./Projects.css";
import HeadingTitle from "./HeadingTitle";
import React from "react";
import Project from "./Project";
import flappy from "../assets/articuno.png";
import auth from "../assets/auth.png";
import vodafone from "../assets/vodafone.svg";
import omima from "../assets/omima.png";
import week from "../assets/week.png";
import mapty from "../assets/mapty.png";
import weather from "../assets/weather.png";
import cehub from "../assets/cehub.png";
import fifa from "../assets/fifa.png";

const PROJECTS = [
  {
    img: vodafone,
    title: "KPI Visualisation App",
    github: "https://github.com/LevwTech",
    info: "Internal cross platform mobile application to display KPI metrics and to monitor the performance of the network throughout the country using charts, Google-powered map network failure points. To be used by the engineers and management of Vodafone Egypt.",
    images: [
      {
        url: "https://i.ibb.co/jwM8DYd/Whats-App-Image-2022-08-30-at-10-40-37-PM.jpg",
      },
      {
        url: "https://i.ibb.co/S5TJgQ0/Whats-App-Image-2022-08-30-at-10-40-38-PM.jpg",
      },
      {
        url: "https://i.ibb.co/6tX17cR/Whats-App-Image-2022-08-30-at-10-40-38-PM-1.jpg",
      },
      {
        url: "https://i.ibb.co/Y2v8Dr8/Whats-App-Image-2022-08-30-at-10-40-38-PM-2.jpg",
      },
    ],
    url: "https://github.com/LevwTech",
    tech: ["React Native", "Node", "SQL"],
  },
  {
    img: omima,
    title: "Omima.Art",
    github: "https://github.com/LevwTech/Omima-Art-Back-End",
    info: "E-commerce shop for selling paintings for a famous egyptian artist. With Authentication, Payment, Collection Systems and Admin Panel. Used React for frontend, Node and MongoDB for the backend. It is now being used by many customers.",
    images: [
      {
        url: "https://i.ibb.co/sWWLHRG/categories.png",
      },
      {
        url: "https://i.ibb.co/yyZMRhP/Buy.png",
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
    url: "https://github.com/levwtech",
    tech: ["Node", "Express", "MongoDB"],
  },

  {
    img: fifa,
    title: "Fifa db",
    github: "https://fifalinks.netlify.app/",
    info: "Fifa football management system to manage players and clubs and display FIFA Cards. Frontend created using HTML,CSS,Js,React and backend using Mysql and Node ",
    images: [
      {
        url: "https://i.ibb.co/nB6X0HD/132-1.png",
      },
      {
        url: "https://i.ibb.co/nnL9xtP/456-5.png",
      },
    ],
    url: "https://fifalinks.netlify.app/",
    tech: ["MySQL", "React", "Node"],
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
    url: "https://levwtech.github.io/weekday/ ",
    tech: ["Javascript"],
  },
];

function Projects() {
  return (
    <React.Fragment>
      <div>
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
