import React, { useEffect } from "react";
import Newsletter from "../Newsletter/Newsletter";
import Showcase from "../Showcase/Showcase";
import Aos from "aos";
import "aos/dist/aos.css";
import What from "../WhatWeDo/What";

const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Showcase />
      {/* <div data-aos="fade-up">
        <Newsletter />
      </div> */}
      <div>
        <What />
      </div>
    </div>
  );
};

export default Body;
