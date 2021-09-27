import classes from "./HeadingTitle.module.css";
function HeadingTitle(props) {
  return (
    <div className={classes.seven}>
      <h1>{props.title}</h1>
    </div>
  );
}
export default HeadingTitle;
