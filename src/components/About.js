import classes from "./About.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  Aos.init();
  return (
    <div>
      <div className={classes.aboutme}>
        <div data-aos="fade">
          I'm
          <span> Levw</span>. A<span> Software Engineer </span> currently 📍
          based in <span>Egypt</span>.
        </div>
        <div data-aos="fade">
          My passion is using <span>science and technology</span> to build high
          performance, scalable and well designed systems and
          <span> solving </span> 🎯 hard <span>problems</span>. I like to{" "}
          <span>
            <a
              href="https://dev.to/levw"
              style={{
                color: "#00E8FC",
              }}
              target="_blank"
              rel="noreferrer"
            >
              write
            </a>
          </span>
          , sometimes.
        </div>
        <div data-aos="fade">
          Currently, i'm studying <span>computer engineering</span>👨🏻‍💻 at BUE
          with an overall grade of <span>A+</span> and expected to graduate in
          2024. I'm experienced in Frontend and <span>Backend</span> Development
          so feel free to contact me for any new opportunities.
        </div>

        <div id="education"></div>
      </div>
    </div>
  );
}
export default About;
