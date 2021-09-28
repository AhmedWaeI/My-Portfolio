import classes from "./About.module.css";
import HeadingTitle from "./HeadingTitle";
function About() {
  return (
    <div>
      <HeadingTitle title="About Me" />
      <div className={classes.aboutme}>
        <div>
          Hey 😀👋 my name is Abdelrahman, friends call me{" "}
          <span className={classes.levw}>Levw</span>. I'm a software engineer
          based in <span>Egypt</span>.
        </div>
        <div>
          I'm also a student at
          <span> The British University in Egypt (BUE)</span> studying
          <span> computer engineering</span> with a cumulative GPA of
          <span> 4.0/4.0 </span>and expected to graduate in 2024.
        </div>
        <div>
          My passion is using <span>science and technlogy</span> to build
          products that people can benefit from. Along with
          <span> solving </span>
          some of the world's problems and trying to understand what is *really*
          going on in the universe.
        </div>
        <div id="work"></div>
      </div>
    </div>
  );
}
export default About;
