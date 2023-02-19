import classes from "./HeadingTitle.module.css";
function HeadingTitle(props) {
  return (
    <div className={classes.title}>
      <div className={classes.outerTitle}>{props.title.toUpperCase()}</div>
      <div className={classes.innerTitle}>{props.title}</div>
    </div>
  );
}

export default HeadingTitle;
