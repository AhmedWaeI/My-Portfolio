import classes from "./Nav.module.css";
function Nav() {
  return (
    <ul className={classes.list}>
      <li>About</li>
      <li>Work</li>
      <li>Skills</li>
      <li>Contact</li>
    </ul>
  );
}
export default Nav;
