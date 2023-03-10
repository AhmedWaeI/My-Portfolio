import classes from "./HeadingTitle.module.css";
import work from "../assets/Headers/Work.svg";
import education from "../assets/Headers/Education.svg";
import contact from "../assets/Headers/Contact.svg";
import projects from "../assets/Headers/Projects.svg";
import skills from "../assets/Headers/Skills.svg";
import about from "../assets/Headers/About.svg";

function HeadingTitle({ title }) {
  const images = {
    Work: work,
    Education: education,
    Contact: contact,
    Projects: projects,
    Skills: skills,
    About: about,
  };
  return (
    <div className={classes.header}>
      <img src={images[title]} alt={`${title}`}></img>
    </div>
  );
}

export default HeadingTitle;
