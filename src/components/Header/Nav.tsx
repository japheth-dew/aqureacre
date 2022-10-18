import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/imgs/logo.png";
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";

type navProps = {
  name: string;
  active: boolean;
  url: string;
};

const NavButton = ({ name, active, url }: navProps) => {
  return (
    <Link to={url}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
        }}
        className={`font-[700] ${active && "text-white"} `}
      >
        {name}
      </motion.button>
    </Link>
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
          <NavButton name="Home" active={true} url={"home"} />
          <NavButton name="About Us" active={false} url={"about"} />
          <NavButton name="Contact Us" active={false} url={"contact"} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
