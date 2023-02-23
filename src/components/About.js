import classes from "./About.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import me from "../assets/me.png";
import HeaderTitle from "./HeadingTitle";
function About() {
  Aos.init();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div data-aos="fade">
        <HeaderTitle title="About me" />
      </div>

      <div className={classes.container}>
        <div data-aos="fade-up" className={classes.aboutme}>
          Currently, i'm studying <span>computer engineering</span>👨🏻‍💻 at BUE
          with an overall grade of <span>A+</span> and expected to graduate in
          2024. I'm experienced in Frontend and <span>Backend</span> Development
          so feel free to contact me for any new opportunities.
        </div>
        <div
          data-aos="fade-down"
          className={classes.imgcontainer}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={me}
            alt="Levw"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>

      <div id="education"></div>
    </div>
  );
}
export default About;
