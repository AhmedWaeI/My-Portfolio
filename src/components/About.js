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
      <div data-aos="fade-down" data-aos-duration="1000">
        <HeaderTitle title="About" />
      </div>

      <div
        className={classes.container}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={classes.aboutme}>
          Currently, i'm studying <span>computer engineering</span>👨🏻‍💻 at BUE
          with an overall grade of <span>A+</span> and expected to graduate in
          2024. I'm experienced in Frontend and <span>Backend</span> Development
          so feel free to contact me for any new opportunities.
        </div>
        <div
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
            style={
              window.screen.availWidth > 800
                ? {
                    width: "300px",
                    height: "300px",
                    borderRadius: "15px",
                  }
                : {
                    width: "250px",
                    height: "250px",
                    borderRadius: "15px",
                  }
            }
          />
        </div>
        <div id="education"></div>
      </div>
    </div>
  );
}
export default About;
