import classes from "./Work.module.css";
import HeadingTitle from "./HeadingTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import bind from "../assets/bind.svg";
function Work() {
  Aos.init();
  return (
    <div>
      <div>
        <HeadingTitle title="Work" />
      </div>

      <div className={classes.works}>
        <div className={classes.work}>
          <div
            className={classes.background}
            style={{ backgroundColor: "#E60000" }}
          >
            <div className={classes.companyName}>Vodafone</div>
          </div>
          <div className={classes.companyLogo}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Vodafone_icon.svg"
              alt="Vodafone logo"
            ></img>
          </div>
          <div className={classes.role}>Software Engineer Intern</div>
          <div className={classes.date}>1st August 2022 – 31st August 2022</div>
          <div className={classes.points}>
            <ul>
              <li>
                Built and delivered an internal cross platform mobile
                application to display KPI metrics and to quickly and
                effectively monitor the performance of the network throughout
                the country.
              </li>
              <li>
                Developed features such as charts, graphs and Google-powered map
                with all the points where network failures happened over a
                certain period using React Native, Node and SQL.
              </li>
              <li>
                Saved the time it takes engineers and managers to do
                KPI-checking and analysis by using the app and was selected as a
                Top Performer.
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.work}>
          <div
            className={classes.background}
            style={{ backgroundColor: "#222222" }}
          >
            <div className={classes.companyName}>desertmonitorOÜ</div>
          </div>
          <div className={classes.companyLogo}>
            <img src={bind} alt="Bind Systems logo"></img>
          </div>
          <div className={classes.role}>Software Engineer</div>
          <div className={classes.date}>June 2022 - September 2022</div>
          <div className={classes.points}>
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
                  style={{
                    color: "#00E8FC",
                  }}
                  href="https://drive.google.com/file/d/1Ez9lXfP-EuewYklkM14MLkqb2adRQVB9/view?usp=sharing"
                >
                  letter of recommendation
                </a>
                .
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.work}>
          <div
            className={classes.background}
            style={{ backgroundColor: "#2E7E3C" }}
          >
            <div className={classes.companyName}>Self Employed</div>
          </div>
          <div className={classes.companyLogo}>
            <img
              src="https://www.coachfortomorrow.com/wp-content/uploads/2017/11/green-self-employed-icon.png"
              alt="Self Employed logo"
            ></img>
          </div>
          <div className={classes.role}>Full Stack Developer</div>
          <div className={classes.date}>February 2022 - May 2022</div>
          <div className={classes.points}>
            <ul>
              <li>
                Created &nbsp;
                <a
                  style={{
                    color: "#00E8FC",
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
                Collection Systems and an Admin Panel for the Online Gallery
                that is now being used by many customers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="projects"></div>
      <div style={{ marginBottom: "30px" }}></div>
    </div>
  );
}
export default Work;
