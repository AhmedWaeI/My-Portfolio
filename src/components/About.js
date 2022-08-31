import classes from "./About.module.css";
import HeadingTitle from "./HeadingTitle";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  Aos.init();
  return (
    <div>
      <HeadingTitle title="About Me" />
      <div className={classes.aboutme}>
        <div data-aos="fade">
          Hey 😀👋 my name is Abdelrahman, friends call me{" "}
          <span className={classes.levw}>Levw</span>. I'm a software engineer
          based in <span>Egypt</span>.
        </div>
        <div data-aos="fade">
          I'm also a student at
          <span> The British University in Egypt (BUE)</span> studying
          <span> computer engineering</span> with a cumulative GPA of
          <span> 4.0/4.0 </span>and expected to graduate in 2024.
        </div>
        <div data-aos="fade">
          My passion is using <span>science and technology</span> to build
          products that people can benefit from. Along with
          <span> solving </span>
          some of the world's <span>problems</span> and trying to understand
          what is *really* going on in the universe.
        </div>
        <div id="work"></div>
      </div>
    </div>
  );
}
export default About;
