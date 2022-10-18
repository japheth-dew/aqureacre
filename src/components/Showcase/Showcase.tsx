import React from "react";
import Header from "../Header/Header";
import classes from "./Showcase.module.css";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <div
      className={`${classes.showcase} h-screen w-full lg:px-[4rem] md:py-[2rem]  md:px-[3rem] p-[1rem] `}
    >
      <Header />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          // stiffness: 260,
          // damping: 20,
          duration: 2,
        }}
        className="h-full lg:w-[50%] md:w-[70%] w-[90%]"
      >
        <div className=" h-[100%] flex flex-col gap-4 justify-center items-start text-white  ">
          <p className="font-[900] md:text-[3.5em] text-[2.8em] leading-[1em] backdrop-blur-sm">
            Your Fleet <br /> is an Investment
          </p>
          <span className="backdrop-sepia-0 bg-black/50 text-white  p-2">
            Your fleet is more than just a set of transactional costs — it’s an
            investment. With an integrated strategy and big picture thinking, it
            can also drive growth and fuel success for your company.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Showcase;
