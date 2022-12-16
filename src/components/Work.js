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
            Self Employed
          </div>
        </div>
        <div className={vodaClasses}>
          <div className={classes.companyRole}>
            SWE Intern <span>@ Vodafone</span>
          </div>
          <div className={classes.companyDate}>
            1st August 2022 – 31st August 2022
          </div>
          <ul>
            <li>
              Built and delivered an internal cross platform mobile application
              to display KPI metrics and to quickly and effectively monitor the
              performance of the network throughout the country.
            </li>
            <li>
              Developed features such as charts, graphs and Google-powered map
              with all the points where network failures happened over a certain
              period using React Native, Node and SQL.
            </li>
            <li>
              Saved the time it takes engineers and managers to do KPI-checking
              and analysis by using the app and was selected as a Top Performer.
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
              community, developed backend and frontend solutions and built
              internal tooling.
            </li>
            <li>
              Wrote configuration scripts and deployed services using Docker,
              Kubernetes and Helm.
            </li>
            <li>
              Increased blog engagement by building a comment system that is
              synced with twitter comments.
            </li>
            <li>
              Developed a service that collects statistics and does data
              visualization using Chart.js
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
          <div className={classes.companyRole}>Full Stack Developer</div>
          <div className={classes.companyDate}>February 2022 - May 2022</div>
          <ul>
            <li>
              Created &nbsp;
              <a
                style={{
                  color: "#30b8b2",
                }}
                href="https://omima.art"
              >
                Omima.Art
              </a>
              &nbsp; which is an E-commerce Store to sell art for a famous
              Egyptian artist. Finished all frontend, backend and deployment
              following all SDLC stages using React, Node and MongoDB.
            </li>
            <li>
              Implemented Authentication, Payment, Shipping, Categories, User
              Collection Systems and an Admin Panel for the Online Gallery that
              is now being used by many customers.
            </li>
          </ul>
        </div>
      </div>

      <div id="projects"></div>
    </div>
  );
}
export default About;