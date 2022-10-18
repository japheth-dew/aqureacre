import React from "react";
import classes from "./Newsletter.module.css";
import { motion } from "framer-motion";

const Newsletter = () => {
   
  return (
    <div className={`lg:px-[4rem] md:p-[3rem] p-[1rem]  ${classes.container}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          // stiffness: 260,
          // damping: 20,
          duration: 2,
        }}
        className="flex flex-col gap-4 lg:w-[60%] w-full mx-auto backdrop-sepia "
      >
        <p className="font-[900] md:text-[3em] text-[2em]">
          Subscribe to newsletter & get company news.
        </p>
        <div className="rounded-md border-blue-900  mx-auto border-[2px] pl-5 w-full  flex ">
          <input
            className="flex-1 focus:outline-none bg-transparent text-black"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="bg-blue-900 font-[600] text-white hover:scale-[110%]  rounded-md px-[18px] py-[10px]">
            Sign Up{" "}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
