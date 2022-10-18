import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/imgs/logo.png";
import Nav2 from "./Nav2";
import { NavLink } from "react-router-dom";

type navProps = {
  name: string;
  active: boolean;
  url: string;
};

const NavButton = ({ name, active, url }: navProps) => {
  return (
    <NavLink to={url}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
        }}
        className={`font-[700] text-[18px] ${active && "text-blue-500"} `}
      >
        {name}
      </motion.button>
    </NavLink>
  );
};

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex justify-between items-center ">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
        }}
        className=" backdrop-blur-md "
      >
        <img className="md:w-[10em] w-[7em]" src={logo} alt="logo" />
      </motion.div>
      <div>
        <button
          onClick={() => setActive(true)}
          className="text-[1.4rem] font-[800] md:hidden inline "
        >
          ☰
        </button>

        {active && <Nav2 active={active} setActive={setActive} />}

        <div className=" gap-5 md:flex hidden">
          <NavButton name="HOME" active={true} url={"/"} />
          <NavButton name="ABOUT US" active={false} url={"/about"} />
          <NavButton name="CONTACT US" active={false} url={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
