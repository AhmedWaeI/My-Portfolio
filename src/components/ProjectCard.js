import React from "react";
import classes from "./ProjectCard.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

function ProjectCards(props) {
  Aos.init();
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className={classes.container}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className={classes.card}>
        <div className={classes.filter}></div>
        <div className={classes.text}>
          <div className={classes.name}>{props.title}</div>
          <div className={classes.desc}>{props.desc}</div>
          <div className={classes.tech}>
            {props.tech.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>
          <div className={classes.links}>
            <a href={props.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-lg"></i>
            </a>
            {props.url && (
              <a href={props.url} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt fa-lg"></i>
              </a>
            )}
          </div>
        </div>
        <img src={props.img} alt="Shop"></img>
      </div>
    </a>
  );
}

export default ProjectCards;
