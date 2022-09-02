import classes from "./Work.module.css";
import HeadingTitle from "./HeadingTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
function About() {
  const [vodaClasses, setVodaClasses] = useState(classes.company);
  const [bindClasses, setBindClasses] = useState(classes.hide);
  const [upworkClasses, setUpworkClasses] = useState(classes.hide);
  const [vodaHighlight, setVodaHighlight] = useState({
    color: "#30b8b2",
  });
  const [bindHighlight, setBindHighlight] = useState({});
  const [upworkHighlight, setUpworkHighlight] = useState({});
  function onClickVodaHandler() {
    setVodaClasses(classes.company);
    setBindClasses(classes.hide);
    setUpworkClasses(classes.hide);

    setVodaHighlight({
      color: "#30b8b2",
    });
    setBindHighlight({});
    setUpworkHighlight({});
  }
  function onClickBindHandler() {
    setVodaClasses(classes.hide);
    setBindClasses(classes.company);
    setUpworkClasses(classes.hide);

    setVodaHighlight({});
    setBindHighlight({
      color: "#30b8b2",
    });
    setUpworkHighlight({});
  }
  function onClickUpworkHandler() {
    setVodaClasses(classes.hide);
    setBindClasses(classes.hide);
    setUpworkClasses(classes.company);

    setVodaHighlight({});
    setBindHighlight({});
    setUpworkHighlight({
      color: "#30b8b2",
    });
  }
  Aos.init();
  return (
    <div>
      <div data-aos="zoom-in">
        <HeadingTitle title="Work" />
      </div>
      <div className={classes.work} data-aos="fade">
        <div className={classes.companies}>
          <div style={vodaHighlight} onClick={onClickVodaHandler}>
            Vodafone
          </div>
          <div style={bindHighlight} onClick={onClickBindHandler}>
            desertmonitorOÜ
          </div>
          <div style={upworkHighlight} onClick={onClickUpworkHandler}>
            Upwork
          </div>
        </div>
        <div className={vodaClasses}>
          <div className={classes.companyRole}>
            SWE Intern <span>@ Vodafone</span>
          </div>
          <div className={classes.companyDate}>
            August 2022 – September 2022
          </div>
          <ul>
            <li>
              Built from the ground up and delivered an internal cross platform
              mobile application to display KPI metrics and to quickly and
              effectively monitor the performance of the network throughout the
              country.
            </li>
            <li>
              The app included features such as charts, Google-powered map with
              all the points where network failures happened over a certain
              period. To be used by the engineers and management of Vodafone
              Egypt. Built using React Native, Node &#38; SQL.
            </li>
          </ul>
        </div>

        <div className={bindClasses}>
          <div className={classes.companyRole}>
            Software Engineer <span>@ desertmonitorOÜ</span>
          </div>
          <div className={classes.companyDate}>June 2022 - September 2022</div>
          <ul>
            <li>
              Worked on building the infrastructure of the Web of Things
              community, developed and deployed backend and frontend solutions
              and built internal tooling using Node, Hugo, Lit, Docker,
              Kubernetes and different database systems.
            </li>
            <li>
              Developed a service that collects statistics and does data
              visualization using chart.js and built a comment system that is
              synced with twitter to increase blog engagement.
            </li>
            <li>
              Received a{" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "#30b8b2" }}
                href="https://drive.google.com/file/d/1Ez9lXfP-EuewYklkM14MLkqb2adRQVB9/view?usp=sharing"
              >
                letter of recommendation
              </a>
              .
            </li>
          </ul>
        </div>

        <div className={upworkClasses}>
          <div className={classes.companyRole}>
            Freelance Full Stack Developer
          </div>
          <div className={classes.companyDate}>February 2022 - April 2022</div>
          <ul>
            <li>
              Created entirely &nbsp;
              <a
                style={{
                  color: "#30b8b2",
                }}
                href="https://omima.art"
              >
                Omima.Art
              </a>
              &nbsp; on my own all Frontend, Backend and Deployment following
              all SDLC stages using the Waterfall model.
            </li>
            <li>
              It is an E-commerce shop for selling paintings for a famous
              Egyptian artist. With Authentication, Payment, Shipping,
              Categories, User Collection Systems and Admin Panel. It is now
              being used by many customers.
            </li>
            <li>Used React for Frontend, Node and MongoDB for the Backend.</li>
          </ul>
        </div>
      </div>

      <div id="projects"></div>
    </div>
  );
}
export default About;
