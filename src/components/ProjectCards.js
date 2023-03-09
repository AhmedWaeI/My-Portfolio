import React from "react";
import classes from "./ProjectCards.module.css";
import HeadingTitle from "./HeadingTitle";
import ProjectCard from "./ProjectCard";
import "aos/dist/aos.css";
import Aos from "aos";
import shopImg from "../assets/Projects/shop.jpg";
import fifaImg from "../assets/Projects/fifa.png";
import birdImg from "../assets/Projects/bird.png";
import maptyImg from "../assets/Projects/mapty.png";
import ticImg from "../assets/Projects/tic.png";
import weekImg from "../assets/Projects/week.png";

const projects = [
  {
    title: "Omima.Art",
    desc: "E-commerce platform and online gallery for selling Art, with authentication, payment, shipping, categorization, user collection systems and admin panel.",
    img: shopImg,
    url: "https://omima.art",
    github: "https://github.com/LevwTech/Omima-Art-back-end",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Fifa DB",
    desc: "Fifa football management system to manage players and clubs and display FIFA Cards",
    img: fifaImg,
    url: "https://fifalinks.netlify.app",
    github: "https://github.com/LevwTech/fifa-db-backend",
    tech: ["MySQL", "React.js", "Node.js"],
  },
  {
    title: "Flappynivia!",
    desc: "Fun arcade game inspired by Articuno & Anivia, received over 200 downloads.",
    img: birdImg,
    url: "https://drive.google.com/file/d/1LVZsqCdFU8nb02j7OzdRb5oDMsHIHDvz/view",
    github: "https://github.com/LevwTech/flappynivia",
    tech: ["Unity", "C#"],
  },
  {
    title: "Mapty",
    desc: "Web App that maps your workouts based on your location using Leaflet library and Geolocation API",
    img: maptyImg,
    url: "https://levwtech.github.io/Mapty/",
    github: "https://github.com/LevwTech/mapty",
    tech: ["Javascript"],
  },
  {
    title: "Assembly Tic Tac Toe",
    desc: "Tic Tac Toe game in Low Level Assembly language of the Intel 8086 Processor using EMU8086. A Fully functioning 2 player game with error handling.",
    img: ticImg,
    github: "https://github.com/LevwTech/Tic-Tac-Toe",
    tech: ["Assembly", "Intel8086"],
  },
  {
    title: "Week Day",
    desc: "Website to calculate the week day from the date information.",
    img: weekImg,
    github: "https://github.com/LevwTech/weekday",
    tech: ["Javascript"],
    url: "https://levwtech.github.io/weekday/",
  },
];

function ProjectCards() {
  Aos.init();
  return (
    <div>
      <div style={{ marginTop: "200px" }}></div>
      <div data-aos="fade-down" data-aos-duration="1000">
        <HeadingTitle title="Projects" />
      </div>
      <div style={{ marginTop: "30px" }}></div>
      <div className={classes.projects}>
        {projects.map((project, i) => (
          <ProjectCard
            title={project.title}
            desc={project.desc}
            img={project.img}
            github={project.github}
            url={project.url}
            tech={project.tech}
            id={i}
          />
        ))}
      </div>
      <div id="skills"></div>
    </div>
  );
}

export default ProjectCards;
