import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`container `}>
      <div className={classes.inner_container}>
        <div className={classes.left_container}>
          <div>
            <p>SQUAREACRE</p>
            <span>
              We can deliver a total solution - bespoke for you. We work with
              you to provide solutions that reflects your aspirations and
              protects your brand values .
            </span>
          </div>
        </div>

        <div className={classes.right_container}>
          <div>
            <p>Company</p>
            <span>About </span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
