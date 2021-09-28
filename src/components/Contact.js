import React from "react";
import HeadingTitle from "./HeadingTitle";
import classes from "./Contact.module.css";
function Contact() {
  return (
    <React.Fragment>
      <HeadingTitle title="Contact" />
      <div className={classes.emailcontainer}>
        <p>
          <span>Get in touch!</span> I’m always looking for new {""}
          <span>opportunities</span>, and my inbox is always open. Also, feel
          free to contact me via{" "}
          <a
            className={classes.linkedin}
            href="https://www.linkedin.com/in/levw/"
          >
            Linkedin
          </a>
        </p>
        <a
          className={classes.email}
          href="mailto:abdelraahmanmostafa@gmail.com"
        >
          Email
        </a>
      </div>
    </React.Fragment>
  );
}
export default Contact;
