import React from "react";
import HeadingTitle from "./HeadingTitle";
import classes from "./Contact.module.css";

import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
  Aos.init();
  return (
    <div data-aos="zoom-in">
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
        <a className={classes.email} href="mailto:levwtech@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}
export default Contact;
