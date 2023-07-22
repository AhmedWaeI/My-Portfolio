import classes from "./Work.module.css";
import HeadingTitle from "./HeadingTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import bind from "../assets/bind.svg";
function Work() {
  Aos.init();
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{ marginTop: "50px" }}
      >
        <HeadingTitle title="Work" />
      </div>

      <div className={classes.works} style={{ marginTop: "30px" }}>
        <div
          className={classes.work}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className={classes.background}
            style={{ backgroundColor: "#E30613" }}
          >
            <div className={classes.companyName}>Bosta</div>
          </div>
          <div className={classes.companyLogo}>
            <img
              src="https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/255061508_4623113987749705_8071998602237133252_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGXDuwGpjGRITYgjq9f_X0qW71zOvHdSt9bvXM68d1K3_znrndcjVf451KiD-xSUFrcRRy2BcPazb47lYg_W8KV&_nc_ohc=4i7WpJps7IwAX-EYgem&_nc_ht=scontent.fcai19-2.fna&oh=00_AfCV2ZWHrkJ_6sFsW059I0oBxiiOMSLb-EzReB9mhfpAxQ&oe=64C076D8"
              alt="Bosta logo"
            ></img>
          </div>
          <div className={classes.role}>Software Engineer Intern</div>
          <div className={classes.date}>July 2023 - September 2023</div>
          <div className={classes.points}>
            <ul>
              <li>Working in the backend team (fullfillment squad).</li>
            </ul>
          </div>
        </div>
        <div
          className={classes.work}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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
          <div className={classes.date}>August 2022</div>
          <div className={classes.points}>
            <ul>
              <li>
                Developed and delivered a cross-platform mobile app to monitor
                KPI metrics and network performance, using React Native,
                Node.js, and SQL.
              </li>
              <li>
                Implemented backend, frontend solutions and API design for
                interactive charts, graphs, and a Google Map integration to
                visualize network performance over time, leading to enhanced
                data analysis and decision making.
              </li>
              <li>
                Improved KPI checking efficiency, reducing analysis and checking
                time, and earning recognition as a top performer.
              </li>
            </ul>
          </div>
        </div>

        <div
          className={classes.work}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
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
                Deployed microservices using Docker, Kubernetes, Helm,
                streamlining the process with configuration scripts.
              </li>
              <li>
                Boosted blog engagement through development of a comment system
                for the company blog that syncs with Twitter comments.
              </li>
              <li>
                Created a service for data visualization and statistics
                collection utilizing Chart.js, Node.js and MongoDB, enabling
                effective collection and analysis of key metrics and statistics.
              </li>
              <li>
                Received a{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "#00E7FB",
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

        <div
          className={classes.work}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className={classes.background}
            style={{ backgroundColor: "#2E7E3C" }}
          >
            <div className={classes.companyName}>Self Employed</div>
          </div>
          <div className={classes.companyLogo}>
            <img
              src="https://i.ibb.co/prLtSDn/download.png"
              alt="Self Employed logo"
            ></img>
          </div>
          <div className={classes.role}>Full Stack Developer</div>
          <div className={classes.date}>February 2022 - May 2022</div>
          <div className={classes.points}>
            <ul>
              <li>
                Built&nbsp;
                <a
                  style={{
                    color: "#00E7FB",
                  }}
                  href="https://omima.art"
                  target="_blank"
                  rel="noreferrer"
                >
                  Omima.Art
                </a>
                , an E-commerce platform for a famous Egyptian artist, using
                React.js, Node.js, and MongoDB, and successfully managed all
                stages of the SDLC.
              </li>
              <li>
                Developed authentication, payment, shipping, categorization,
                user collection, and admin panel systems for the online gallery,
                resulting in increased customer satisfaction.
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
